import React, { useState } from 'react';
import { Product, UserTier } from '../types.ts';
import { COLORS, PRICING_TIER_FACTORS } from '../constants.ts';
import { Plus, Minus, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  userTier: UserTier;
  onAddToCart: (product: Product, quantity: number, price: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, userTier, onAddToCart }) => {
  const [qty, setQty] = useState<number>(1);

  const currentPrice = product.price * PRICING_TIER_FACTORS[userTier];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.application}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">{product.id}</span>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight h-10 overflow-hidden">
            {product.application}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 text-[11px] text-gray-500">
          <div className="bg-gray-50 p-1.5 rounded text-center">
            <span className="block font-bold text-gray-400 uppercase text-[9px]">Ref 01</span>
            <span className="font-medium text-gray-700">{product.ref01}</span>
          </div>
          <div className="bg-gray-50 p-1.5 rounded text-center">
            <span className="block font-bold text-gray-400 uppercase text-[9px]">Ref 02</span>
            <span className="font-medium text-gray-700">{product.ref02}</span>
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-end justify-between border-t border-gray-50 pt-3">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Preço Unitário</span>
              <span className="text-lg font-black text-gray-900">
                R$ {currentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
              <button 
                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                className="p-2 hover:text-orange-600 transition-colors"
              >
                <Minus size={14} />
              </button>
              <input 
                type="number" 
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 text-center bg-transparent text-sm font-bold focus:outline-none"
              />
              <button 
                onClick={() => setQty(prev => prev + 1)}
                className="p-2 hover:text-orange-600 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            
            <button
              onClick={() => onAddToCart(product, qty, currentPrice)}
              style={{ backgroundColor: COLORS.primary }}
              className="flex-1 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
            >
              <ShoppingBag size={16} />
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};