import { Coffee, Heart, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-5 h-5 text-primary" />
              <span className="font-heading text-lg font-semibold">Cozy Café Finder</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discovering hidden coffee corners and cozy moments, one café at a time.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/hidden-cafes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Hidden Cafés
              </Link>
              <Link to="/journal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Café Journal
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Brewed with Love <Heart className="w-4 h-4 text-secondary inline" />
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Cozy Café Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
