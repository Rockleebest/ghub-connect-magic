
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const comboProdutosPrincipal = '/lovable-uploads/8e1828f4-ead8-4ceb-944e-bc1b36295c24.png';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchaseModal = ({ isOpen, onClose }: PurchaseModalProps) => {
  const [selectedVoltage, setSelectedVoltage] = useState<string>('Bivolt');
  const checkoutBaseUrl = "https://pay.pagamentosbrazil-seguro.site/HNnBEMFu";

  // Capturar UTMs quando o componente monta
  useEffect(() => {
    console.log('PurchaseModal: Capturando UTMs...');
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = [
      "utm_source",
      "utm_medium", 
      "utm_campaign",
      "utm_term",
      "utm_content",
      "click_id",
      "fbclid",
      "gclid",
      "src",
      "sck",
    ];

    console.log('URL atual:', window.location.href);
    console.log('Query string:', window.location.search);

    utmKeys.forEach((key) => {
      const value = urlParams.get(key);
      if (value) {
        localStorage.setItem(key, value);
        console.log(`UTM capturada: ${key} = ${value}`);
      }
    });

    // Debug: mostrar o que está no localStorage
    console.log('LocalStorage atual:');
    utmKeys.forEach(key => {
      const stored = localStorage.getItem(key);
      if (stored) {
        console.log(`  ${key}: ${stored}`);
      }
    });
  }, []);

  const buildTrackedUrl = (baseUrl: string) => {
    console.log('=== CONSTRUINDO URL RASTREADA ===');
    console.log('Base URL:', baseUrl);
    
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign", 
      "utm_term",
      "utm_content",
      "click_id",
      "fbclid",
      "gclid",
      "src",
      "sck",
    ];

    const currentUrlParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams();

    console.log('Processando parâmetros...');
    
    utmKeys.forEach((key) => {
      // Primeiro tenta pegar da URL atual
      let value = currentUrlParams.get(key);
      console.log(`URL atual - ${key}:`, value);
      
      // Se não encontrar, tenta no localStorage (verifica com e sem prefixo)
      if (!value) {
        value = localStorage.getItem(key) || localStorage.getItem(`utm_${key}`);
        console.log(`LocalStorage - ${key}:`, value);
      }
      
      if (value) {
        params.append(key, value);
        console.log(`✓ Adicionado ${key} = ${value}`);
      } else {
        console.log(`✗ Não encontrado ${key}`);
      }
    });

    // Adicionar voltagem
    if (selectedVoltage) {
      params.append("voltage", selectedVoltage);
      console.log('✓ Adicionada voltagem:', selectedVoltage);
    }

    const queryString = params.toString();
    console.log('Query string final:', queryString);
    
    const finalUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
    
    console.log('URL FINAL:', finalUrl);
    console.log('=== FIM CONSTRUÇÃO URL ===');
    
    return finalUrl;
  };

  const handlePurchaseClick = () => {
    console.log('=== CLIQUE NO BOTÃO COMPRAR ===');
    if (selectedVoltage) {
      const trackedUrl = buildTrackedUrl(checkoutBaseUrl);
      console.log('Redirecionando para:', trackedUrl);
      window.open(trackedUrl, '_blank');
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-sm mx-auto p-0 bg-white rounded-3xl">
          <DialogTitle className="sr-only">Comprar Produto</DialogTitle>
          <DialogDescription className="sr-only">Modal para finalizar compra do kit de furadeira</DialogDescription>
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <h2 className="text-xl font-bold text-gray-900">Comprar Produto</h2>
          </div>
          
          {/* Product Info */}
          <div className="px-6 pb-6">
            <div className="flex gap-4 mb-6">
              <img 
                src={comboProdutosPrincipal} 
                alt="Kit de Furadeira Multifuncional 21V com acessórios" 
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-2 leading-tight">
                  Kit de Furadeira Multifuncional 21V Recarregável com 2 Baterias Incluídas
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-orange-600">R$ 69,00</span>
                  <span className="text-sm text-gray-500 line-through">R$ 199,99</span>
                  <span className="text-sm bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-medium">-65%</span>
                </div>
                <div className="bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full inline-block">
                  Frete grátis
                </div>
              </div>
            </div>

            {/* Voltage Selection */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Voltagem:</h4>
              <div className="flex">
                <span className="p-3 rounded-lg border text-sm font-medium bg-orange-50 border-orange-500 text-orange-700">Bivolt</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                disabled={!selectedVoltage}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3"
                onClick={handlePurchaseClick}
              >
                {selectedVoltage ? 'Confirmar Compra' : 'Selecione a voltagem'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
