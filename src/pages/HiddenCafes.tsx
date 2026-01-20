import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CafeCard from "@/components/CafeCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import cafe1 from "@/assets/cafe-1.jpg";
import cafe2 from "@/assets/cafe-2.jpg";
import cafe3 from "@/assets/cafe-3.jpg";
import cafe4 from "@/assets/cafe-4.jpg";

const HiddenCafes = () => {
  const navigate = useNavigate();
  const [selectedVibe, setSelectedVibe] = useState<string>("All");

  const vibeFilters = ["All", "Cottagecore", "Vintage", "Minimalist", "Boho", "Urban Cozy"];

  const cafes = [
    {
      name: "The Cinnamon Nook",
      image: cafe1,
      description: "Soft lights, gentle music, smells of fresh pastries and cinnamon — perfect for journaling.",
      vibe: ["Rustic", "Quiet", "Cozy", "Bookish Corner"],
      distance: "2.5 km",
    },
    {
      name: "Lily's Corner",
      image: cafe2,
      description: "Sunlight drifts through lace curtains, wooden tables with books stacked neatly. The faint aroma of roasted coffee beans and vanilla fills the air.",
      vibe: ["Bookish", "Serene", "Vintage"],
      distance: "1.8 km",
    },
    {
      name: "Daisy & Thyme",
      image: cafe3,
      description: "Minimalist charm with dried flower arrangements and perfect natural lighting. A haven for peaceful moments and journaling.",
      vibe: ["Minimalist", "Bright", "Peaceful"],
      distance: "3.2 km",
    },
    {
      name: "Wildflower Café",
      image: cafe4,
      description: "Boho vibes with plants, macramé wall hangings, and the most inviting seating area. Perfect for creative work and inspiration.",
      vibe: ["Boho", "Plants", "Creative"],
      distance: "4.1 km",
    },
    {
      name: "Rose & Honey",
      image: cafe1,
      description: "Cottagecore dream with floral wallpaper, vintage teacups, and homemade pastries. Every corner tells a story.",
      vibe: ["Cottagecore", "Vintage", "Cozy"],
      distance: "2.9 km",
    },
    {
      name: "The Quiet Library",
      image: cafe2,
      description: "Floor-to-ceiling bookshelves, leather armchairs, and the gentle sound of pages turning. A reader's paradise.",
      vibe: ["Bookish", "Quiet", "Vintage"],
      distance: "3.7 km",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl font-bold mb-4 text-foreground">
              Hidden Cafés
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of the coziest, most enchanting coffee corners waiting to be discovered
            </p>
          </div>

          {/* Vibe Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {vibeFilters.map((vibe) => (
              <Button
                key={vibe}
                variant={selectedVibe === vibe ? "default" : "outline"}
                onClick={() => setSelectedVibe(vibe)}
                className={selectedVibe === vibe ? "bg-primary" : ""}
              >
                {vibe}
              </Button>
            ))}
          </div>

          {/* Café Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cafes.map((cafe, index) => (
              <CafeCard
                key={index}
                {...cafe}
                onClick={() => navigate("/journal")}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HiddenCafes;
