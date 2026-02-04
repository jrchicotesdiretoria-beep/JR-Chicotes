
import React, { useState, useMemo } from 'react';
import { UserSession, UserTier, Product, CartItem } from './types';
import { MOCK_PRODUCTS, COLORS } from './constants';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Search, ShieldCheck, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Login form states (for mock purposes)
  const [loginForm, setLoginForm] = useState({ name: '', cnpj: '' });

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = 
        p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.application.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.codTC.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.codRainha.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchTerm]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.name && loginForm.cnpj) {
      setUser({
        name: loginForm.name,
        cnpj: loginForm.cnpj,
        tier: UserTier.RETAILER // Default tier when form selection is removed
      });
    }
  };

  const addToCart = (product: Product, quantity: number, price: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity, appliedPrice: price } 
            : item
        );
      }
      return [...prev, { product, quantity, appliedPrice: price }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-black py-10 flex flex-col items-center">
            <div className="flex flex-col items-center">
               <div className="flex items-baseline leading-none font-black tracking-tighter italic">
                <span className="text-white text-6xl">j</span>
                <span style={{ color: COLORS.primary }} className="text-6xl -ml-2">R</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">
                Chicotes Elétricos
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-black text-gray-900 text-center mb-2">Portal do Cliente</h2>
            <p className="text-gray-500 text-sm text-center mb-8">Faça login para acessar os preços exclusivos da sua categoria.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Empresa / Nome</label>
                <input 
                  required
                  type="text" 
                  value={loginForm.name}
                  onChange={e => setLoginForm({...loginForm, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm font-medium"
                  placeholder="Ex: Auto Peças São José"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">CNPJ</label>
                <input 
                  required
                  type="text" 
                  value={loginForm.cnpj}
                  onChange={e => setLoginForm({...loginForm, cnpj: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm font-medium font-mono"
                  placeholder="00.000.000/0000-00"
                />
              </div>

              <button 
                type="submit"
                style={{ backgroundColor: COLORS.primary }}
                className="w-full py-4 rounded-xl text-white font-black text-lg mt-6 shadow-xl shadow-orange-100 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                ACESSAR CATÁLOGO
                <ChevronRight size={20} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-center gap-2 text-gray-400">
              <ShieldCheck size={16} />
              <span className="text-[11px] font-medium">Conexão B2B Segura</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        user={user} 
        cartCount={cart.length} 
        onLogout={() => setUser(null)} 
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por Código JR, Rainha, TC ou Aplicação..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm font-medium bg-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">Catálogo de Produtos</h2>
          <span className="text-sm text-gray-500 font-medium">
            Exibindo <span className="text-orange-600 font-bold">{filteredProducts.length}</span> modelos
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                userTier={user.tier} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-20 flex flex-col items-center justify-center border-2 border-dashed border-gray-100">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
              <Search size={48} className="text-gray-200" />
            </div>
            <p className="text-gray-400 font-bold">Nenhum chicote encontrado para esta busca.</p>
            <button 
              onClick={() => {setSearchTerm('');}}
              className="mt-4 text-orange-600 font-bold hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        user={user}
        onRemove={removeFromCart}
      />

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="text-xs">
            <span className="block text-gray-400 font-bold">ORÇAMENTO</span>
            <span className="text-lg font-black">R$ {cart.reduce((a, b) => a + (b.appliedPrice * b.quantity), 0).toFixed(2)}</span>
          </div>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          style={{ backgroundColor: COLORS.primary }}
          className="px-8 py-3 rounded-xl text-white font-bold text-sm shadow-lg shadow-orange-100"
        >
          VER CARRINHO ({cart.length})
        </button>
      </footer>
    </div>
  );
};

export default App;
