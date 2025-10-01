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
      src: "/lovable-uploads/8e1828f4-ead8-4ceb-944e-bc1b36295c24.png",
      alt: "Kit de Furadeira Multifuncional 21V com acessórios"
    },
    {
      src: "/lovable-uploads/3158d6a9-a80e-4bc7-9145-d9812995017b.png",
      alt: "Bateria de 21V alta potência e duração"
    },
    {
      src: "/lovable-uploads/89fe3f35-518a-4cbc-9174-00b1db7308a1.png",
      alt: "Fácil de usar - uso profissional e doméstico"
    },
    {
      src: "/lovable-uploads/eaa4882e-9ba2-47ac-9def-af5a323ff3d4.png",
      alt: "Possui 2 velocidades com LED para áreas escuras"
    },
    {
      src: "/lovable-uploads/8368b0d5-b5bf-4c7b-9fdd-8b125f5968d3.png",
      alt: "Leve e resistente com 22 configurações de torque"
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