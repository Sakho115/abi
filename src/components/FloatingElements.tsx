import { useEffect, useState } from 'react';
import { Leaf, Sparkles } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float-slow opacity-20"
          style={{
            left: el.left,
            top: '-50px',
            animationDelay: el.delay,
            animationDuration: el.duration,
          }}
        >
          {el.id % 2 === 0 ? (
            <Leaf className="w-6 h-6 text-primary" />
          ) : (
            <Sparkles className="w-4 h-4 text-secondary" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
