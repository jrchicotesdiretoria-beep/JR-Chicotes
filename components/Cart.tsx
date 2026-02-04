import React from 'react';
import { X, Trash2, Send, ChevronRight } from 'lucide-react';
import { CartItem, UserSession } from '../types.ts';
import { COLORS, WHATSAPP_NUMBER } from '../constants.ts';

interface CartProps {
  items: CartItem[];
  user: UserSession;
  onRemove: (productId: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const Cart: React.FC<CartProps> = ({ items, user, onRemove, onClose, isOpen }) => {
  const total = items.reduce((acc, item) => acc + (item.appliedPrice * item.quantity), 0);

  const handleSendToWhatsApp = () => {
    let message = `*JR CHICOTES - NOVO ORÇAMENTO*\n\n`;
    message += `👤 *Cliente:* ${user.name}\n`;
    message += `📄 *CNPJ:* ${user.cnpj}\n`;
    message += `📊 *Tabela:* ${user.tier}\n\n`;
    message += `*ITENS SOLICITADOS:*\n`;
    message += `--------------------------------\n`;

    items.forEach(item => {
      message += `✅ *${item.product.id}* - ${item.product.application}\n`;
      message += `   Qtd: ${item.quantity} | Unit: R$ ${item.appliedPrice.toFixed(2)}\n`;
      message += `   Subtotal: R$ ${(item.quantity * item.appliedPrice).toFixed(2)}\n`;
      message += `   Ref 01: ${item.product.ref01} | Ref 02: ${item.product.ref02}\n\n`;
    });

    message += `--------------------------------\n`;
    message += `💰 *TOTAL ESTIMADO: R$ ${total.toFixed(2)}*\n\n`;
    message += `_Este é um orçamento preliminar sujeito a disponibilidade de estoque._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              Meu Carrinho
              <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {items.length} itens
              </span>
            </h2>
            <p className="text-xs text-gray-500 mt-1 uppercase font-semibold">Cotação para {user.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <div className="bg-gray-50 p-6 rounded-full mb-4">
                <Trash2 size={48} className="opacity-20" />
              </div>
              <p className="font-medium">Seu carrinho está vazio</p>
              <button onClick={onClose} className="mt-4 text-orange-600 font-bold text-sm">Continuar comprando</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl group">
                <img src={item.product.imageUrl} alt="" className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-orange-600">{item.product.id}</span>
                    <button 
                      onClick={() => onRemove(item.product.id)}
                      className="text-gray-300 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{item.product.application}</h4>
                  <div className="flex justify-between items-end mt-2">
                    <div className="text-xs text-gray-500">
                      {item.quantity} x R$ {item.appliedPrice.toFixed(2)}
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      R$ {(item.quantity * item.appliedPrice).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t bg-gray-50 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-black text-gray-900">
                <span>Total Estimado</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              style={{ backgroundColor: COLORS.primary }}
              className="w-full py-4 rounded-xl text-white font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-orange-200 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Send size={20} />
              ENVIAR PARA WHATSAPP
              <ChevronRight size={20} />
            </button>
            
            <p className="text-[10px] text-center text-gray-400 font-medium">
              Ao clicar, você será redirecionado para o WhatsApp da JR Chicotes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};