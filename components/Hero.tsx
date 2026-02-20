
import React from 'react';
import { Phone, ArrowRight, Sparkles, CheckCircle, Car } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden bg-white scroll-mt-24">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 rounded-bl-[100px]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFD700] rounded-full blur-[150px] opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-50 border border-blue-100 text-[#003366] text-xs font-black uppercase tracking-widest mb-8">
              <Sparkles size={14} className="text-[#FFD700]" />
              ANU Student Initiative
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#003366] mb-6 leading-[1.1] tracking-tight">
              Pristine Results,<br />
              <span className="text-[#FFD700]">Every Single Time.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Professional cleaning services powered by the ambition and precision of university students. We restore your space and vehicles with integrity and youthful energy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#booking" 
                className="flex items-center justify-center gap-2 bg-[#003366] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10 active:scale-95"
              >
                Book Service <ArrowRight size={20} />
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="flex items-center justify-center gap-2 bg-white text-[#003366] border-2 border-gray-100 px-8 py-4 rounded-2xl font-black text-lg hover:border-[#FFD700] transition-all"
              >
                <Phone size={20} /> {PHONE_NUMBER}
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm font-bold text-gray-400">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" />
                ))}
              </div>
              <span>Trusted by 500+ households</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Main House Cleaning Image */}
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Cleaning Service" 
                className="w-full h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent"></div>
            </div>

            {/* Floating Car Wash Image */}
            <div className="absolute -bottom-10 -left-6 lg:-left-20 z-20 w-48 h-48 lg:w-64 lg:h-64 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl animate-float group/car">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800" 
                alt="Car Wash Service" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/car:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/car:bg-transparent transition-colors"></div>
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                <Car size={14} className="text-[#003366] font-black" />
                <span className="text-[10px] font-black text-[#003366] uppercase tracking-tighter">Pro Car Wash</span>
              </div>
            </div>
            
            {/* Overlay Stat Card */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl z-30 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-[#FFD700] p-2 rounded-xl">
                  <CheckCircle className="text-[#003366] w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#003366] opacity-60 mb-0.5">Quality Check</p>
                  <p className="text-lg font-black text-[#003366]">100% Satisfaction</p>
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-blue-50 rounded-[60px] -z-10 rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
