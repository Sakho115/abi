import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Cafe Finder backend running on Vercel 🚀",
  });
});

app.get("/api/cafes", (req, res) => {
  res.json([]);
});

export default app;

