import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";
import cafe1 from "@/assets/cafe-1.jpg";
import cafe2 from "@/assets/cafe-2.jpg";
import cafe3 from "@/assets/cafe-3.jpg";
import cafe4 from "@/assets/cafe-4.jpg";
import galleryCollage from "@/assets/gallery-collage.jpg";

const Gallery = () => {
  const photos = [
    { src: cafe1, cafe: "The Cinnamon Nook", category: "Exterior" },
    { src: cafe2, cafe: "Lily's Corner", category: "Interior" },
    { src: cafe3, cafe: "Daisy & Thyme", category: "Details" },
    { src: cafe4, cafe: "Wildflower Café", category: "Interior" },
    { src: cafe1, cafe: "Rose & Honey", category: "Coffee" },
    { src: cafe2, cafe: "The Quiet Library", category: "Books" },
    { src: cafe3, cafe: "Morning Glory", category: "Details" },
    { src: cafe4, cafe: "Velvet & Vine", category: "Interior" },
    { src: galleryCollage, cafe: "Various Cafés", category: "Collage" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="font-heading text-5xl font-bold mb-4 text-foreground">
              Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A visual journey through cozy corners, warm lighting, and moments of peace
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  index === 8 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.cafe}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                      {photo.cafe}
                    </h3>
                    <p className="text-sm text-muted-foreground">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Cafés Captured</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-heading font-bold text-secondary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Cozy Moments</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-heading font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Warm Memories</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
