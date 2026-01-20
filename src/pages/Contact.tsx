import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Coffee, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! ☕",
      description: "We'll get back to you soon. Thank you for sharing!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="font-heading text-5xl font-bold mb-4 text-foreground">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Know a hidden gem we should visit? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a hidden café you love ☕"
                      className="mt-2 min-h-32 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="border-border hover-glow">
                <CardContent className="p-6">
                  <Coffee className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                    Share a Café
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Found a cozy corner that deserves to be discovered? Tell us about it and we'll add it to our list!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover-glow">
                <CardContent className="p-6">
                  <MessageCircle className="w-10 h-10 mb-4 text-secondary" />
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                    Collaborate
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Are you a café owner or photographer? We'd love to work together to showcase cozy spaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/20 to-primary/20 border-border">
                <CardContent className="p-6">
                  <p className="text-sm text-foreground/80 italic">
                    "Every café has a story. Every message helps us discover new chapters. Thank you for being part of this journey."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
