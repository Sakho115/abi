import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Coffee, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-cafe.jpg";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="relative h-96 mb-16 overflow-hidden rounded-3xl mx-4 md:mx-8" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
                Our Story
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Story */}
          <Card className="mb-12 border-border">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  This site was born from a love for <span className="font-semibold text-red-950">hidden coffee corners</span> and <span className="font-semibold text-secondary">quiet moments</span>. We want to guide you to places where time slows and each sip feels like home.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  In a world that moves too fast, there's something magical about finding a café that feels like a secret garden — a place where the lighting is just right, the music is gentle, and you can spend hours with a book or journal without anyone rushing you.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  We believe every café has its own story, its own atmosphere, and its own kind of magic. Through careful curation and personal visits, we document these spaces so that others who crave the same quiet comfort can find their perfect spot.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border hover-glow">
              <CardContent className="p-6 text-center">
                <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Authenticity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every café is personally visited and genuinely loved. No paid placements, just honest recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover-glow">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Storytelling
                </h3>
                <p className="text-sm text-muted-foreground">
                  We capture not just what a café looks like, but how it feels — the atmosphere, scents, and moments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover-glow">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Community
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building a community of people who appreciate slow mornings, good coffee, and cozy spaces.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-br from-secondary/20 to-primary/20 border-border">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/90 italic max-w-2xl mx-auto">
                "To help you discover spaces where you can breathe, create, and simply be — one cozy café at a time."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>;
};
export default About;