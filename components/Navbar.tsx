
import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#003366] p-2 rounded-lg">
              <Sparkles className="text-[#FFD700] w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#003366] leading-tight uppercase tracking-tight">
                Sunshine
              </h1>
              <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Cleaning Enterprise</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-semibold text-[#003366] hover:text-[#FFD700] transition-colors">Home</a>
            <a href="#services" className="text-sm font-semibold text-[#003366] hover:text-[#FFD700] transition-colors">Services</a>
            <a href="#about" className="text-sm font-semibold text-[#003366] hover:text-[#FFD700] transition-colors">Why Us</a>
            <a href="#booking" className="bg-[#FFD700] text-[#003366] px-5 py-2.5 rounded-full font-bold hover:shadow-lg transition-all text-sm">
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#003366]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-semibold text-[#003366] border-b">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-semibold text-[#003366] border-b">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-semibold text-[#003366] border-b">Why Us</a>
            <div className="pt-4">
              <a href="#booking" onClick={() => setIsOpen(false)} className="block w-full text-center bg-[#FFD700] text-[#003366] py-3 rounded-xl font-bold">
                Book Service
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
