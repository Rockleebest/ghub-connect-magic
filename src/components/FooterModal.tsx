import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Download } from "lucide-react";

interface FooterModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "refund" | "shipping" | "contact";
}

export const FooterModal = ({ isOpen, onClose, type }: FooterModalProps) => {
  const getContent = () => {
    switch (type) {
      case "privacy":
        return {
          title: "Política de Privacidade",
          content: (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">1. Informações que Coletamos</h3>
                <p>Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, faz uma compra, ou entra em contato conosco. Isso inclui:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Nome, endereço de e-mail e informações de contato</li>
                  <li>Informações de pagamento e entrega</li>
                  <li>Histórico de compras e preferências</li>
                  <li>Comunicações que você nos envia</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Como Usamos suas Informações</h3>
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Processar e entregar seus pedidos</li>
                  <li>Comunicar sobre seus pedidos e nossa empresa</li>
                  <li>Melhorar nossos produtos e serviços</li>
                  <li>Personalizar sua experiência de compra</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Compartilhamento de Informações</h3>
                <p>Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros, exceto conforme descrito nesta política. Podemos compartilhar informações com:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Prestadores de serviços que nos auxiliam nas operações</li>
                  <li>Autoridades legais quando exigido por lei</li>
                  <li>Em caso de fusão ou aquisição da empresa</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Segurança dos Dados</h3>
                <p>Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5. Seus Direitos</h3>
                <p>De acordo com a LGPD, você tem o direito de:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incompletos ou inexatos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Portabilidade dos dados</li>
                  <li>Revogar consentimento</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">6. Contato</h3>
                <p>Para exercer seus direitos ou esclarecer dúvidas sobre nossa política de privacidade, entre em contato conosco através do e-mail: privacidade@eletroprime.com.br</p>
              </div>
            </div>
          )
        };

      case "terms":
        return {
          title: "Termos de Uso",
          content: (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">1. Aceitação dos Termos</h3>
                <p>Ao acessar e usar este site, você aceita estar vinculado aos termos e condições de uso. Se você não concordar com algum desses termos, não deve usar nossos serviços.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Uso do Site</h3>
                <p>Você pode usar nosso site para:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Navegar e visualizar produtos</li>
                  <li>Fazer compras de produtos disponíveis</li>
                  <li>Entrar em contato conosco</li>
                  <li>Acessar informações sobre nossa empresa</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Restrições de Uso</h3>
                <p>É proibido:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Usar o site para fins ilegais ou não autorizados</li>
                  <li>Tentar ganhar acesso não autorizado ao sistema</li>
                  <li>Interferir no funcionamento normal do site</li>
                  <li>Reproduzir, duplicar ou copiar conteúdo sem autorização</li>
                  <li>Transmitir vírus ou códigos maliciosos</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Produtos e Preços</h3>
                <p>Todos os produtos estão sujeitos à disponibilidade. Reservamo-nos o direito de limitar quantidades, descontinuar produtos e alterar preços sem aviso prévio. Os preços não incluem taxas de entrega, que serão calculadas no checkout.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5. Propriedade Intelectual</h3>
                <p>Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade da EletroPrime e está protegido por direitos autorais e outras leis de propriedade intelectual.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">6. Limitação de Responsabilidade</h3>
                <p>A EletroPrime não será responsável por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços, exceto quando exigido por lei.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">7. Modificações</h3>
                <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">8. Lei Aplicável</h3>
                <p>Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.</p>
              </div>
            </div>
          )
        };

      case "refund":
        return {
          title: "Políticas de Reembolso",
          content: (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">1. Direito de Arrependimento</h3>
                <p>De acordo com o Código de Defesa do Consumidor, você tem o direito de desistir da compra em até 7 dias corridos a partir do recebimento do produto, sem necessidade de justificativa. Para compras online, este prazo é estendido para 30 dias.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Condições para Reembolso</h3>
                <p>Para solicitar reembolso, o produto deve atender aos seguintes critérios:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Estar em perfeitas condições, sem uso</li>
                  <li>Embalagem original intacta</li>
                  <li>Acompanhar todos os acessórios e manuais</li>
                  <li>Não apresentar sinais de desgaste ou danos</li>
                  <li>Estar dentro do prazo de devolução</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Como Solicitar Reembolso</h3>
                <p>Para solicitar o reembolso:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Entre em contato conosco através do e-mail: atendimento@eletroprime.com.br</li>
                  <li>Informe o número do pedido e motivo da devolução</li>
                  <li>Aguarde as instruções para envio do produto</li>
                  <li>Embale o produto com cuidado na embalagem original</li>
                  <li>Envie o produto para o endereço informado</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Prazo para Reembolso</h3>
                <p>Após recebermos e analisarmos o produto devolvido, o reembolso será processado em até 10 dias úteis. O valor será creditado na mesma forma de pagamento utilizada na compra original.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5. Custos de Devolução</h3>
                <p>Os custos de envio para devolução são:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Por direito de arrependimento: Por conta do cliente</li>
                  <li>Por defeito no produto: Por nossa conta</li>
                  <li>Por produto diferente do pedido: Por nossa conta</li>
                  <li>Por dano durante o transporte: Por nossa conta</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">6. Produtos Não Reembolsáveis</h3>
                <p>Os seguintes produtos não são elegíveis para reembolso:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Produtos personalizados ou feitos sob medida</li>
                  <li>Produtos danificados pelo mau uso</li>
                  <li>Produtos fora do prazo de devolução</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">7. Garantia do Produto</h3>
                <p>Todos os nossos produtos possuem garantia do fabricante. Problemas cobertos pela garantia devem ser direcionados ao fabricante conforme manual do produto. A garantia não cobre danos por mau uso ou desgaste natural.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">8. Contato</h3>
                <p>Para dúvidas sobre nossa política de reembolso ou para solicitar uma devolução, entre em contato: atendimento@eletroprime.com.br ou WhatsApp: (11) 99999-9999</p>
              </div>
            </div>
          )
        };

      case "shipping":
        return {
          title: "Políticas de Envio",
          content: (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">1. Áreas de Entrega</h3>
                <p>Realizamos entregas para todo o território nacional brasileiro. Algumas regiões remotas podem ter prazos diferenciados ou taxas adicionais.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Prazos de Entrega</h3>
                <p>Os prazos de entrega variam conforme a região:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Região Sudeste: 3 a 7 dias úteis</li>
                  <li>Região Sul: 5 a 10 dias úteis</li>
                  <li>Região Centro-Oeste: 7 a 12 dias úteis</li>
                  <li>Região Nordeste: 8 a 15 dias úteis</li>
                  <li>Região Norte: 10 a 20 dias úteis</li>
                </ul>
                <p className="mt-2">Os prazos começam a contar a partir da confirmação do pagamento e são apenas estimativas. Pode haver variações devido a fatores externos.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Frete Grátis</h3>
                <p>Oferecemos frete grátis para:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Compras acima de R$ 99,00 para as regiões Sul e Sudeste</li>
                  <li>Compras acima de R$ 149,00 para as demais regiões</li>
                  <li>Todas as compras durante promoções especiais</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Processamento do Pedido</h3>
                <p>Nosso processo de envio segue estas etapas:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Confirmação do pagamento (até 2 dias úteis)</li>
                  <li>Separação e embalagem do produto (1 a 2 dias úteis)</li>
                  <li>Postagem nos Correios ou transportadora</li>
                  <li>Envio do código de rastreamento por e-mail</li>
                  <li>Entrega no endereço informado</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5. Rastreamento</h3>
                <p>Após a postagem, você receberá um código de rastreamento por e-mail para acompanhar sua encomenda. Você pode rastrear seu pedido no site dos Correios ou da transportadora responsável.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">6. Entrega</h3>
                <p>Informações importantes sobre a entrega:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>É necessário ter alguém para receber o produto</li>
                  <li>Pode ser solicitado documento de identificação</li>
                  <li>Conferir o produto na presença do entregador</li>
                  <li>Em caso de ausência, será feita nova tentativa de entrega</li>
                  <li>Após 3 tentativas, o produto retorna para nossa empresa</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">7. Problemas na Entrega</h3>
                <p>Em caso de problemas como:</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Produto danificado durante o transporte</li>
                  <li>Produto extraviado</li>
                  <li>Atraso superior a 10 dias do prazo estimado</li>
                  <li>Entrega no endereço errado</li>
                </ul>
                <p className="mt-2">Entre em contato conosco imediatamente para que possamos resolver a situação o mais rápido possível.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">8. Endereço de Entrega</h3>
                <p>Certifique-se de que o endereço informado está correto e completo. Não nos responsabilizamos por entregas em endereços incorretos fornecidos pelo cliente. Alterações de endereço só podem ser feitas antes da postagem do produto.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">9. Contato</h3>
                <p>Para dúvidas sobre entregas ou problemas com seu pedido: entrega@eletroprime.com.br ou WhatsApp: (11) 99999-9999</p>
              </div>
            </div>
          )
        };

      case "contact":
        return {
          title: "Fale Conosco",
          content: (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900">Informações de Contato</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Telefone / WhatsApp</p>
                        <p className="text-sm text-gray-600">(11) 99999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">E-mail</p>
                        <p className="text-sm text-gray-600">atendimento@eletroprime.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Endereço</p>
                        <p className="text-sm text-gray-600">Rua da Tecnologia, 123<br />Centro - São Paulo, SP<br />CEP: 01000-000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Horário de Atendimento</p>
                        <p className="text-sm text-gray-600">Segunda à Sexta: 9h às 18h<br />Sábado: 9h às 14h<br />Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Departments */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900">Departamentos</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-500 pl-3">
                      <p className="font-medium text-sm">Vendas</p>
                      <p className="text-xs text-gray-600">Dúvidas sobre produtos, preços e disponibilidade</p>
                      <p className="text-xs text-orange-600">vendas@eletroprime.com.br</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-3">
                      <p className="font-medium text-sm">Pós-venda</p>
                      <p className="text-xs text-gray-600">Suporte após a compra, garantia e assistência técnica</p>
                      <p className="text-xs text-green-600">suporte@eletroprime.com.br</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="font-medium text-sm">Entregas</p>
                      <p className="text-xs text-gray-600">Acompanhamento de pedidos e informações de entrega</p>
                      <p className="text-xs text-blue-600">entregas@eletroprime.com.br</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-3">
                      <p className="font-medium text-sm">Devoluções</p>
                      <p className="text-xs text-gray-600">Trocas, devoluções e reembolsos</p>
                      <p className="text-xs text-purple-600">devolucoes@eletroprime.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900">Redes Sociais</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </Button>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900">FAQ - Perguntas Frequentes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Como rastrear meu pedido?</p>
                    <p className="text-gray-600">Você receberá o código de rastreamento por e-mail após a postagem.</p>
                  </div>
                  <div>
                    <p className="font-medium">Qual o prazo de entrega?</p>
                    <p className="text-gray-600">De 5 a 15 dias úteis, dependendo da sua região.</p>
                  </div>
                  <div>
                    <p className="font-medium">Posso trocar o produto?</p>
                    <p className="text-gray-600">Sim, você tem até 30 dias para solicitar a troca.</p>
                  </div>
                </div>
              </div>

              {/* App Download */}
              <div className="text-center">
                <h3 className="font-semibold mb-4 text-gray-900">Baixe nosso app</h3>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    App Store
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          )
        };

      default:
        return { title: "", content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};