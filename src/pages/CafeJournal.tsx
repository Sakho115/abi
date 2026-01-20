import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, BookOpen, Music, Sparkles } from "lucide-react";
import cafe1 from "@/assets/cafe-1.jpg";
import cafe2 from "@/assets/cafe-2.jpg";
import cafe3 from "@/assets/cafe-3.jpg";

const CafeJournal = () => {
  const journalEntries = [
    {
      cafe: "Lily's Corner",
      image: cafe2,
      date: "November 28, 2024",
      atmosphere: "Sunlight drifts through lace curtains, wooden tables with books stacked neatly. The faint aroma of roasted coffee beans and vanilla fills the air.",
      decor: "Vintage bookshelves line the walls, filled with worn paperbacks and potted plants. Soft Edison bulbs hang from exposed beams, casting a warm amber glow.",
      music: "Lo-fi jazz plays quietly in the background, just loud enough to feel cozy but not intrusive.",
      scent: "Coffee, vanilla, and old paper — like stepping into a well-loved library.",
      impressions: [
        "Perfect for journaling ✨",
        "Quiet and serene",
        "Cinnamon latte recommended ☕",
        "Saw three people reading alone — my kind of place",
      ],
      vibes: ["Bookish", "Quiet", "Vintage", "Serene"],
    },
    {
      cafe: "The Cinnamon Nook",
      image: cafe1,
      date: "November 25, 2024",
      atmosphere: "The moment you walk in, warmth embraces you. Soft lights glow from corner lamps, and the gentle hum of conversation creates a cocoon of comfort.",
      decor: "Rustic wooden furniture, hand-painted murals of wildflowers, and shelves displaying vintage teacups and books.",
      music: "Acoustic covers of indie songs — recognizable but soothing.",
      scent: "Fresh cinnamon rolls and freshly ground coffee beans.",
      impressions: [
        "Best cinnamon roll I've ever had 🥐",
        "Great for rainy days",
        "Owner is super friendly",
        "Free wifi and plenty of outlets",
      ],
      vibes: ["Rustic", "Cozy", "Warm", "Friendly"],
    },
    {
      cafe: "Daisy & Thyme",
      image: cafe3,
      date: "November 20, 2024",
      atmosphere: "Minimalist and bright, with natural light flooding through tall windows. Everything feels intentional and calming.",
      decor: "White walls adorned with dried flower arrangements. Simple wooden tables and woven chairs.",
      music: "Soft piano instrumentals — almost meditative.",
      scent: "Fresh herbs and honey.",
      impressions: [
        "Perfect for morning writing sessions",
        "Herbal tea selection is excellent 🍵",
        "Very Instagram-worthy",
        "Not too crowded even on weekends",
      ],
      vibes: ["Minimalist", "Peaceful", "Bright", "Modern"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="font-heading text-5xl font-bold mb-4 text-foreground">
              Café Journal
            </h1>
            <p className="text-muted-foreground text-lg">
              Personal impressions and cozy moments from each hidden gem
            </p>
          </div>

          <div className="space-y-12">
            {journalEntries.map((entry, index) => (
              <Card key={index} className="overflow-hidden border-border">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.cafe}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                      {entry.cafe}
                    </h2>
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  {/* Vibes */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {entry.vibes.map((vibe, i) => (
                      <Badge key={i} variant="secondary">
                        {vibe}
                      </Badge>
                    ))}
                  </div>

                  {/* Atmosphere */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        Atmosphere
                      </h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{entry.atmosphere}</p>
                  </div>

                  {/* Decor */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Coffee className="w-5 h-5 text-primary" />
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        Decor
                      </h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{entry.decor}</p>
                  </div>

                  {/* Music & Scent */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Music className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-semibold text-foreground">Music</h3>
                      </div>
                      <p className="text-sm text-foreground/80">{entry.music}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-secondary" />
                        <h3 className="font-heading font-semibold text-foreground">Scent</h3>
                      </div>
                      <p className="text-sm text-foreground/80">{entry.scent}</p>
                    </div>
                  </div>

                  {/* User Impressions */}
                  <div className="bg-secondary/20 rounded-lg p-4">
                    <h3 className="font-heading font-semibold mb-3 text-foreground">
                      Personal Impressions
                    </h3>
                    <ul className="space-y-2">
                      {entry.impressions.map((impression, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {impression}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CafeJournal;
