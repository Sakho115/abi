import { useState, useRef } from "react";
import { Search, Sparkles, Heart, Coffee, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import CafeCard from "@/components/CafeCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import AmbientMusic from "@/components/AmbientMusic";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";
import cafe1 from "@/assets/cafe-1.jpg";
import cafe2 from "@/assets/cafe-2.jpg";
import cafe3 from "@/assets/cafe-3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const scrollY = useParallax();
  const featuredRef = useRef<HTMLDivElement>(null);
  const moodRef = useRef<HTMLDivElement>(null);
  const isFeaturedVisible = useScrollAnimation(featuredRef);
  const isMoodVisible = useScrollAnimation(moodRef);

  const featuredCafes = [{
    name: "The Cinnamon Nook",
    image: cafe1,
    description: "Soft lights, gentle music, smells of fresh pastries and cinnamon — perfect for journaling.",
    vibe: ["Rustic", "Quiet", "Cozy"],
    distance: "2.5 km"
  }, {
    name: "Lily's Corner",
    image: cafe2,
    description: "Sunlight through lace curtains, wooden tables with books stacked neatly. Vanilla and coffee in the air.",
    vibe: ["Bookish", "Serene", "Vintage"],
    distance: "1.8 km"
  }, {
    name: "Daisy & Thyme",
    image: cafe3,
    description: "Minimalist charm with dried flowers and perfect lighting. A haven for peaceful moments.",
    vibe: ["Minimalist", "Bright", "Peaceful"],
    distance: "3.2 km"
  }];

  return (
    <div className="min-h-screen bg-background texture-linen">
      <FloatingElements />
      <AmbientMusic />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden vignette">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src={heroImage}
            alt="Cozy café interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-secondary animate-sparkle" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 text-shadow-soft leading-tight">
            Discover Your Cozy Coffee Corners
          </h1>
          <p className="font-elegant text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Warm corners, soft lights, and hidden cafés waiting for your footsteps.
          </p>

          <div className="max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for your perfect café..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card/90 backdrop-blur-sm border-border focus:ring-primary shadow-layered"
              />
            </div>
            <Button size="lg" className="h-12 px-6 shadow-layered warm-glow" onClick={() => navigate("/map")}>
              <Coffee className="w-5 h-5 mr-2" />
              Find Café
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Hidden Gems */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10" ref={featuredRef}>
          <div className={`text-center mb-12 transition-all duration-700 ${isFeaturedVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-handwritten text-5xl font-bold text-foreground mb-4 text-shadow-soft">
              Featured Hidden Gems
            </h2>
            <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide">
              Handpicked cozy corners where time slows down and every sip feels like home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCafes.map((cafe, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isFeaturedVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CafeCard {...cafe} onClick={() => navigate("/hidden-cafes")} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood of the Day */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4" ref={moodRef}>
          <Card className={`max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-layered transition-all duration-700 ${isMoodVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse-soft" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-layered animate-bounce-gentle">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-handwritten text-3xl font-bold text-foreground mb-2 text-shadow-soft">
                    Mood of the Day
                  </h3>
                  <p className="font-elegant text-muted-foreground mb-4 tracking-wide">
                    Today's recommendation: <span className="font-handwritten text-lg text-foreground">The Cinnamon Nook</span>
                  </p>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    Perfect for reflective journaling with soft lighting and gentle acoustic music.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" className="shadow-layered warm-glow" onClick={() => navigate("/hidden-cafes")}>
                      Visit Café
                    </Button>
                    <Button variant="outline" size="sm" className="shadow-layered" onClick={() => navigate("/journal")}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Journal Entry
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
