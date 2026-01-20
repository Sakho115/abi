import { Book, Music, Flower2, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CafeCardProps {
  name: string;
  image: string;
  description: string;
  vibe: string[];
  distance?: string;
  onClick?: () => void;
}

const CafeCard = ({ name, image, description, vibe, distance, onClick }: CafeCardProps) => {
  const vibeIcons = {
    Bookish: Book,
    Music: Music,
    Flowers: Flower2,
  };

  return (
    <Card 
      className="overflow-hidden card-lift cursor-pointer bg-card border-border shadow-layered group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-primary/20 transition-all duration-500" />
        {distance && (
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground shadow-layered backdrop-blur-sm animate-pulse-soft">
            <MapPin className="w-3 h-3 mr-1" />
            {distance}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 relative">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Flower2 className="w-4 h-4 text-secondary animate-float" />
        </div>
        <h3 className="font-handwritten text-2xl font-semibold mb-2 text-foreground text-shadow-soft">
          {name}
        </h3>
        <p className="font-elegant text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {vibe.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs shadow-soft transition-transform hover:scale-105"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 text-muted-foreground">
          {Object.entries(vibeIcons).map(([key, Icon]) => (
            <Icon 
              key={key} 
              className="w-4 h-4 transition-all hover:text-primary hover:scale-125" 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CafeCard;
