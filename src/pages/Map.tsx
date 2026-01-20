import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState<number | null>(null);

  const vibeFilters = ["All", "Cottagecore", "Vintage", "Minimalist", "Boho", "Urban Cozy"];

  useEffect(() => {
    const fetchCafes = async () => {
      const lat = 13.0827; // Example latitude (Chennai)
      const lon = 80.2707; // Example longitude
      const radius = 1000; // in meters

      try {
        const res = await fetch(`http://localhost:5000/cafes?lat=${lat}&lon=${lon}&radius=${radius}`);
        const data = await res.json();
        setCafes(data.cafes || []);
      } catch (error) {
        console.error("Error fetching cafes:", error);
      }
    };

    fetchCafes();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 flex h-screen">
        {/* Sidebar Filters */}
        <div className="w-80 border-r border-border bg-card p-6 overflow-y-auto">
          <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">Find Your Vibe</h2>

          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">ATMOSPHERE</h3>
            <div className="flex flex-col gap-2">
              {vibeFilters.map((vibe) => (
                <Button key={vibe} variant="outline" className="justify-start">
                  {vibe}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">DISTANCE</h3>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start">Nearby (0-5 km)</Button>
              <Button variant="outline" className="justify-start">Medium (5-10 km)</Button>
              <Button variant="outline" className="justify-start">Far (10+ km)</Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
            <Coffee className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">
              Click on any café marker to see more details and read its journal entry.
            </p>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          <MapContainer center={[13.0827, 80.2707]} zoom={15} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {cafes.map((cafe) => (
              <Marker
                key={cafe.id}
                position={[cafe.lat, cafe.lon]}
                eventHandlers={{ click: () => setSelectedCafe(cafe.id) }}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold">{cafe.name}</h3>
                    <p>{cafe.tags?.amenity || "Cafe"}</p>
                    <Badge className="bg-primary/10 text-primary mt-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {cafe.distance || "N/A"}
                    </Badge>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
