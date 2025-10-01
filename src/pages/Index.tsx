import { useState, useRef, useEffect } from 'react';
import { useBottomOffset } from '@/hooks/useBottomOffset';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CountdownTimer } from "@/components/CountdownTimer";
import { StarRating } from "@/components/StarRating";
import { ProductBadge } from "@/components/ProductBadge";
import { ChatModal } from "@/components/ChatModal";
import { StoreModal } from "@/components/StoreModal";
import { PurchaseModal } from "@/components/PurchaseModal";
import { ProductCarousel } from "@/components/ProductCarousel";
import { FooterModal } from "@/components/FooterModal";
import ImageLightbox from "@/components/ImageLightbox";
import { 
  ShoppingCart, 
  Shield, 
  Truck, 
  MessageCircle, 
  CheckCircle,
  Star,
  Clock,
  Gift,
  Zap,
  Share2,
  ArrowLeft,
  Store
} from 'lucide-react';
import comboProdutos from '@/assets/combo-produtos.jpg';
import reviewLiquidificador from '@/assets/review-liquidificador.jpg';
import reviewSanduicheira from '@/assets/review-sanduicheira.jpg';
import reviewCombo from '@/assets/review-combo.jpg';
import eletroprimeLogo from '@/assets/eletroprime-logo-new.png';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [footerModal, setFooterModal] = useState<"privacy" | "terms" | "refund" | "shipping" | "contact" | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Use the bottom offset hook
  const isAtBottom = useBottomOffset();

  // Sticky CTA measurement
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaHeight, setCtaHeight] = useState(0);

  // Footer measurement
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const measureCta = () => setCtaHeight(ctaRef.current ? ctaRef.current.offsetHeight : 0);
    const measureFooter = () => setFooterHeight(footerRef.current ? footerRef.current.offsetHeight : 0);
    const measureAll = () => { measureCta(); measureFooter(); };

    measureAll();

    // Observe size changes of CTA and Footer
    const observers: ResizeObserver[] = [];
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      if (ctaRef.current) {
        const roCta = new ResizeObserver(measureCta);
        roCta.observe(ctaRef.current);
        observers.push(roCta);
      }
      if (footerRef.current) {
        const roFooter = new ResizeObserver(measureFooter);
        roFooter.observe(footerRef.current);
        observers.push(roFooter);
      }
    }

    window.addEventListener('resize', measureAll);
    return () => {
      window.removeEventListener('resize', measureAll);
      observers.forEach(o => o.disconnect());
    };
  }, []);

  const reviews = [
    {
      name: "Carlos Mendes",
      rating: 5,
      comment: "Chegou certinho aqui em Salvador, em menos de uma semana 😱 Já testei e tá aprovada demais! Potente, vem com duas baterias que duram bem. Valeu cada centavo!",
      image: "/lovable-uploads/9f9ddbc6-c875-4849-9410-2c9deb19bae5.png",
      location: "Salvador - BA",
      productImage: "/lovable-uploads/6848dc32-4635-42dc-9850-898aa8d19215.png"
    },
    {
      name: "José Santos",
      rating: 5,
      comment: "Galera, chegou aqui em Campinas rapidinho, não deu nem 5 dias. Usei hoje pra montar uns móveis e foi de boa, bem forte a furadeira. Super recomendo!",
      image: "/lovable-uploads/fae8ea5f-db4e-4d3d-ad22-700046f2baef.png",
      location: "Campinas - SP",
      productImage: "/lovable-uploads/f81d8f29-d64e-40a6-95b3-b00ef882f89f.png"
    },
    {
      name: "João Pereira",
      rating: 5,
      comment: "Comprei meio desconfiado, mas chegou aqui em Fortaleza direitinho. A maleta veio completinha e a furadeira é top demais, tô usando direto aqui em casa.",
      image: "/lovable-uploads/f9b7eb41-115e-4168-bf49-18f176e85250.png",
      location: "Fortaleza - CE",
      productImage: "/lovable-uploads/bf9bfee3-f43b-4ee1-972a-bd768eedaa7a.png"
    },
    {
      name: "Marcos Machado",
      rating: 5,
      comment: "Chegou em BH ontem! Já botei pra jogo aqui numa reforma que tô fazendo e ó... surpreendeu, viu? Carrega rápido e tem força. Curti muito o custo-benefício!",
      image: "/lovable-uploads/3050a206-4579-44ff-98a6-ab8d93ec9242.png",
      location: "Belo Horizonte - MG",
      productImage: "/lovable-uploads/63b6ffce-fe37-4b93-9512-b95c755be802.png"
    },
    {
      name: "Antônio Silva",
      rating: 5,
      comment: "Recebi em Manaus em 6 dias, achei que ia demorar mais. A bichinha é boa, hein! Já usei pra furar parede, montar armário... vem com tudo certinho. Compra boa demais!",
      image: "/lovable-uploads/5aa0c82c-e71d-41b1-8e1a-23a526064b7f.png",
      location: "Manaus - AM",
      productImage: "/lovable-uploads/14337539-3779-44f4-a544-8066ecaabd64.png"
    },
  ];

  const ratings = [
    { stars: 5, count: 1115 },
    { stars: 4, count: 132 },
    { stars: 3, count: 7 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
            <span className="font-medium text-gray-900">Produto</span>
          </div>
          <div className="flex items-center gap-3">
            <Share2 className="w-6 h-6 text-gray-600" />
            <button aria-label="Abrir carrinho" onClick={() => setIsPurchaseOpen(true)} className="p-0 m-0 bg-transparent">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Product Image Carousel */}
      <ProductCarousel />

      {/* Flash Sale Banner - Mobile */}
        <div className="bg-orange-600 text-white px-4 py-3 mx-4 rounded-lg mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold leading-none">R$ 69</span>
              <span className="text-xl font-bold">,00</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="uppercase text-xs font-black tracking-wide bg-white/10 border border-white/20 rounded px-2 py-1">
                OFERTA RELÂMPAGO!
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="opacity-90 line-through">R$ 199,99</span>
            <div className="flex items-center gap-2">
              <span className="bg-white/10 rounded px-2 py-1">Economize até 65%</span>
              <span className="opacity-90">Termina em</span>
              <CountdownTimer compact />
            </div>
          </div>
        </div>

      {/* Product Info */}
      <div className="px-4 py-4">
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 border border-pink-200 rounded-lg px-3 py-2 mb-3">
            <p className="text-sm font-medium text-pink-700 text-center">Desconto exclusivo na primeira Compra</p>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
            Kit de Furadeira Multifuncional 21V Recarregável com 2 Baterias Incluídas
          </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={5} size="sm" />
          <span className="text-sm font-medium">4.9</span>
          <span className="text-sm text-gray-500">({totalReviews} avaliações)</span>
          <span className="text-sm text-gray-500">• 2788 vendidos</span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-green-700">Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
            <Truck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">Frete Grátis</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
            <Gift className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-medium text-purple-700">12 meses garantia</span>
          </div>
          <div className="flex items-center gap-2 bg-yellow-50 p-3 rounded-lg">
            <MessageCircle className="w-4 h-4 text-yellow-600" />
            <span className="text-xs font-medium text-yellow-700">Suporte 24h</span>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Avaliações ({totalReviews})</h3>
          
          {/* Rating Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">4.9</span>
                <div>
                  <StarRating rating={5} size="sm" />
                  <p className="text-xs text-gray-600">{totalReviews} avaliações</p>
                </div>
              </div>
            </div>
            
            {/* Rating Bars */}
            <div className="space-y-1">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2">
                  <span className="text-xs w-6">{rating.stars}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-yellow-400 h-1.5 rounded-full" 
                      style={{ width: `${(rating.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-8 text-right">{rating.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={review.image} 
                    alt={`Foto de ${review.name}`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{review.name}</span>
                      <span className="text-xs text-gray-500">{review.location}</span>
                    </div>
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
                {review.productImage && (
                  <img 
                    src={review.productImage} 
                    alt="Foto do produto em uso - toque para ampliar"
                    className="w-full max-w-48 h-32 object-cover rounded-lg cursor-zoom-in"
                    onClick={() => setLightboxImage(review.productImage)}
                  />
                )}
              </div>
            ))}
            <button className="text-sm text-orange-600 font-medium">Ver todas as avaliações</button>
          </div>
        </div>

        {/* Store Info */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <img src={eletroprimeLogo} alt="EletroPrime Shop" className="w-12 h-12 rounded-lg" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900">EletroPrime Shop</span>
                <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-700 font-medium">Loja Verificada</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">2.135 produtos</p>
              <p className="text-xs text-gray-500">Vendedor desde julho de 2021</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className={`${isFollowing ? 'bg-green-50 text-green-700 border-green-200' : 'text-yellow-600 border-yellow-200 hover:bg-yellow-50'}`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? 'Seguindo' : 'Seguir'}
            </Button>
          </div>
          <Button 
            variant="ghost" 
            className="text-sm text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
            onClick={() => setIsStoreOpen(true)}
          >
            Ver informações da loja
          </Button>
        </div>

        {/* Product Descriptions */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Sobre o produto</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2 text-gray-900">Descrição do Produto</h4>
              <div className="space-y-4 text-sm text-gray-700">
                <p className="leading-relaxed">
                  A Furadeira Parafusadeira de Impacto Sem Fio a Bateria 21V é uma ferramenta poderosa e versátil projetada para atender às necessidades de perfuração em diversos materiais. Seu design ergonômico e compacto proporciona conforto durante o uso prolongado e facilita o manuseio em espaços restritos.
                </p>

                {showFullDescription && (
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Vantagens</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Facilidade de uso</li>
                        <li>Versatilidade</li>
                        <li>Durabilidade</li>
                        <li>Eficiência</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Aplicações</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ideal para perfuração em diversos materiais como metal, madeira e plástico</li>
                        <li>Indicada para profissionais da construção, marcenaria, bricolagem e uso doméstico</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Itens Inclusos</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>01 Parafusadeira Furadeira 21V</li>
                        <li>01 Conector de broca de parafusadeira</li>
                        <li>01 Extensor Flexível</li>
                        <li>01 Carregador Bivolt</li>
                        <li>01 Conector de Bits</li>
                        <li>11 Bits de parafuso</li>
                        <li>09 Soquetes</li>
                        <li>06 Brocas</li>
                        <li>02 Baterias</li>
                        <li>01 Maleta</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Ficha Técnica</h5>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p><strong>Diâmetro do mandril:</strong> 3/8" (10mm) - aperto rápido</p>
                        <p><strong>Rotação sem carga:</strong> 0-400 & 0-1400 RPM</p>
                        <p><strong>Velocidade:</strong> Variável e reversível</p>
                        <p><strong>Indicador:</strong> Carga de bateria</p>
                        <p><strong>Empunhadura:</strong> Soft Grip</p>
                        <p><strong>Torque:</strong> 17 + 1 opções</p>
                        <p><strong>Bateria:</strong> 1.300 mAh</p>
                        <p><strong>Torque máximo:</strong> 32 N.M</p>
                        <p><strong>Voltagem:</strong> Bivolt</p>
                        <p><strong>Bateria Extra:</strong> Inclusa</p>
                        <p><strong>Peso:</strong> 1,250 kg</p>
                        <p><strong>Dimensões (CxLxA):</strong> 20 x 8 x 20 cm</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Botão Ver mais dentro do bloco correto */}
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-sm text-orange-600 font-medium mt-3 hover:text-orange-700"
              >
                {showFullDescription ? 'Ver menos' : 'Ver mais'}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Bottom CTA */}
      <div ref={ctaRef} className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40" style={{ marginBottom: isAtBottom ? footerHeight : 0, paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="text-xs text-gray-500 line-through">R$ 199,99</div>
            <div className="text-lg font-bold text-orange-600">R$ 69,00</div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 px-3 py-2"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs">Chat</span>
            </Button>
            
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-medium"
              onClick={() => setIsPurchaseOpen(true)}
            >
              <span className="text-sm">Comprar Agora</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom spacing for fixed CTA */}
      <div style={{ height: ctaHeight }} aria-hidden="true"></div>

      {/* Footer */}
      <footer ref={footerRef} className="bg-white text-gray-700 border-t border-gray-200">
        <div className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <button 
                onClick={() => setFooterModal("privacy")}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Política de Privacidade
              </button>
              <button 
                onClick={() => setFooterModal("terms")}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => setFooterModal("refund")}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Políticas de Reembolso
              </button>
              <button 
                onClick={() => setFooterModal("shipping")}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Políticas de Envio
              </button>
              <button 
                onClick={() => setFooterModal("contact")}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
        
        {/* Legal Notice */}
        <div className="px-4 py-6 bg-white border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            <strong>Aviso Legal:</strong> Esta página não faz parte ou está relacionada ao Kwai ou a Kuaishou Technology. 
            Além disso, este site NÃO é endossado pelo Kwai de forma alguma.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <StoreModal isOpen={isStoreOpen} onClose={() => setIsStoreOpen(false)} />
      <PurchaseModal isOpen={isPurchaseOpen} onClose={() => setIsPurchaseOpen(false)} />
      <ImageLightbox 
        open={!!lightboxImage} 
        src={lightboxImage ?? ""} 
        alt="Foto do produto em uso" 
        onOpenChange={(open) => { if (!open) setLightboxImage(null); }} 
      />
      {footerModal && (
        <FooterModal 
          isOpen={!!footerModal} 
          onClose={() => setFooterModal(null)} 
          type={footerModal} 
        />
      )}
    </div>
  );
};

export default Index;
