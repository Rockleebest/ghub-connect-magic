import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, X, Package } from 'lucide-react';
import eletroprimeLogo from '@/assets/eletroprime-logo-new.png';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreModal = ({ isOpen, onClose }: StoreModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto p-0 bg-white">
        <DialogHeader className="border-b border-gray-200 p-4">
          <DialogTitle className="text-lg font-semibold">Informações da Loja</DialogTitle>
        </DialogHeader>
        
        <div className="p-6">
          {/* Store Info */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={eletroprimeLogo} 
              alt="EletroPrime Shop" 
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg text-gray-900">EletroPrime Shop</h3>
                <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-700 font-medium">Verificada</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Vendedor desde julho de 2021</p>
            </div>
          </div>

          {/* Store Stats */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Produtos Vendidos</span>
              </div>
              <span className="text-sm font-bold text-gray-900">11.227</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Produtos na Loja</span>
              </div>
              <span className="text-sm font-bold text-gray-900">2.135</span>
            </div>
          </div>

          {/* Store Description */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Sobre a Loja</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              A EletroPrime Shop é especializada em eletrodomésticos de qualidade com os melhores preços. 
              Trabalhamos com marcas reconhecidas e oferecemos garantia em todos os produtos.
            </p>
          </div>

          {/* Ações removidas conforme solicitado */}
        </div>
      </DialogContent>
    </Dialog>
  );
};