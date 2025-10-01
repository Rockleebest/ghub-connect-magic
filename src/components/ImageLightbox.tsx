import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export type ImageLightboxProps = {
  open: boolean;
  src: string;
  alt?: string;
  onOpenChange: (open: boolean) => void;
};

const ImageLightbox: React.FC<ImageLightboxProps> = ({ open, src, alt = "Imagem ampliada", onOpenChange }) => {
  if (!src) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-2xl p-0 border-0 bg-transparent shadow-none">
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
