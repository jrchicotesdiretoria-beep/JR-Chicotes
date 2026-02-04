import React from 'react';
import { ShoppingCart, LogOut, User } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { UserSession } from '../types.ts';
import { COLORS } from '../constants.ts';

interface HeaderProps {
  user: UserSession;
  cartCount: number;
  onLogout: () => void;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, cartCount, onLogout, onCartClick }) => {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User size={18} className="text-gray-400" />
              <div>
                <span className="font-semibold block">{user.name}</span>
                <span className="text-xs uppercase text-orange-600 font-bold">{user.tier}</span>
              </div>
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Sair"
            >
              <LogOut size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={onCartClick} className="relative p-2">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};