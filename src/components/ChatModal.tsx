import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, X } from 'lucide-react';
import eletroprimeLogo from '@/assets/eletroprime-logo-new.png';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatModal = ({ isOpen, onClose }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Olá! Sou João da EletroPrime 👋",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    "Qual o prazo de entrega?",
    "Tem desconto para pagamento à vista?",
    "Como funciona a devolução?"
  ];

  const getResponse = (question: string): string => {
    switch (question) {
      case "Qual o prazo de entrega?":
        return "O prazo de entrega é de 5 a 15 dias úteis no máximo. Temos frete grátis para compras acima de R$ 50,00! 📦";
      case "Tem desconto para pagamento à vista?":
        return "Sim! O preço que você está vendo já tem 65% de desconto à vista. É uma oferta imperdível! 💰";
      case "Como funciona a devolução?":
        return "Você tem 30 dias para devolução sem complicações. Basta entrar em contato conosco e cuidamos de tudo! 🔄";
      default:
        return "Obrigado pela pergunta! Nossa equipe irá te responder em breve. 😊";
    }
  };

  const handleQuestionClick = (question: string) => {
    // Add user message
    const userMessage: Message = {
      text: question,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(question);
      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto p-0 bg-white">
        <DialogHeader className="border-b border-gray-200 p-4">
          <DialogTitle className="text-lg font-semibold">Chat com o Vendedor</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-96">
          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                {!message.isUser && (
                  <img src={eletroprimeLogo} alt="EletroPrime" className="w-8 h-8 rounded-full mr-2 flex-shrink-0" />
                )}
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.isUser 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <img src={eletroprimeLogo} alt="EletroPrime" className="w-8 h-8 rounded-full mr-2 flex-shrink-0" />
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Predefined Questions */}
          <div className="border-t border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-3">Escolha uma pergunta:</p>
            <div className="space-y-2">
              {predefinedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    index === 0 ? 'bg-yellow-100 border-orange-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm text-gray-900">{question}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};