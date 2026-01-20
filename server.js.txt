// server.js
// Simple Cafe Finder backend using Overpass (OpenStreetMap)
// Requires Node 18+ (uses global fetch)

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// GET /cafes?lat=...&lon=...&radius=1000
app.get("/cafes", async (req, res) => {
  try {
    const lat = parseFloat(req.query.lat);
    const lon = parseFloat(req.query.lon);
    const radius = parseInt(req.query.radius || "1000", 10); // meters

    if (Number.isNaN(lat) || Number.isNaN(lon)) {
      return res.status(400).json({
        error:
          "Missing or invalid lat/lon. Example: /cafes?lat=13.0827&lon=80.2707&radius=1000",
      });
    }

    // Build Overpass QL — search nodes/ways/relations with amenity=cafe
    const overpassQL = `
      [out:json][timeout:25];
      (
        node["amenity"="cafe"](around:${radius},${lat},${lon});
        way["amenity"="cafe"](around:${radius},${lat},${lon});
        relation["amenity"="cafe"](around:${radius},${lat},${lon});
      );
      out center tags;
    `;

    const resp = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: overpassQL,
    });

    if (!resp.ok) {
      const txt = await resp.text().catch(() => "");
      return res
        .status(502)
        .json({ error: "Overpass API returned error", details: txt });
    }

    const data = await resp.json();

    // Map into friendly objects
    const cafes = (data.elements || [])
      .map((el) => {
        const latOut = el.lat ?? (el.center && el.center.lat);
        const lonOut = el.lon ?? (el.center && el.center.lon);

        return {
          id: el.id,
          osm_type: el.type, // node / way / relation
          name:
            (el.tags && (el.tags.name || el.tags["name:en"])) || "Unnamed Cafe",
          lat: latOut,
          lon: lonOut,
          tags: el.tags || {},
        };
      })
      .filter((c) => c.lat && c.lon); // keep only ones with coords

    res.json({
      count: cafes.length,
      requested: { lat, lon, radius },
      cafes,
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Cafe Finder backend listening at http://localhost:${PORT}`)
);
