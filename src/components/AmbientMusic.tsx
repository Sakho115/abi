import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AmbientMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3"
      />
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-layered bg-card/90 backdrop-blur-sm hover:scale-110 transition-all"
        aria-label="Toggle ambient music"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        )}
        <Music className="w-3 h-3 absolute -top-1 -right-1 text-secondary animate-pulse-soft" />
      </Button>
    </>
  );
};

export default AmbientMusic;
