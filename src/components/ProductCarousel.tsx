import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { ProductBadge } from "@/components/ProductBadge";

interface ProductCarouselProps {
  className?: string;
}

export const ProductCarousel = ({ className }: ProductCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/macacoeletrico1.jpg",
      alt: "Macaco Hidráulico Elétrico Com Maleta Com 4 Funções em 1 com acessórios completos"
    },
    {
      src: "/lovable-uploads/macacoeletrico2.jpg",
      alt: "Kit completo do Macaco Hidráulico Elétrico com ferramentas"
    },
    {
      src: "/lovable-uploads/macacoeletrico3.jpg",
      alt: "Macaco Hidráulico 5 Toneladas com bomba de ar integrada"
    },
    {
      src: "/lovable-uploads/macacoeletrico4.jpg",
      alt: "Design ergonômico do Macaco Hidráulico 12V"
    },
    {
      src: "/lovable-uploads/macacoeletrico5.jpg",
      alt: "Macaco Hidráulico Elétrico com adaptadores inclusos"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Carousel 
        className="w-full" 
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-contain bg-white"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white/90 border-0 shadow-lg" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white/90 border-0 shadow-lg" />
      </Carousel>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};