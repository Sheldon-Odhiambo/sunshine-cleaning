
import React from 'react';
import { Mail, Instagram, MapPin, Sparkles, Phone } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, INSTAGRAM, TIKTOK } from '../constants';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#003366] text-white pt-24 pb-12 overflow-hidden">
      {/* Enhanced Background Image with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 scale-110"
          alt="Pristine Home Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 via-[#003366]/95 to-[#003366]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#FFD700] p-2 rounded-xl shadow-lg shadow-yellow-500/20">
                <Sparkles className="text-[#003366] w-5 h-5" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight">Sunshine</h4>
            </div>
            <p className="text-blue-100 mb-8 leading-relaxed opacity-80 text-sm font-medium">
              Premium cleaning solutions powered by ANU students. Youthful energy meets professional discipline for an unmatched shine.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-green-500 transition-all hover:-translate-y-1 shadow-md border border-white/5"
                title="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a 
                href={`https://instagram.com/${INSTAGRAM}`} 
                target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#FFD700] hover:text-[#003366] transition-all hover:-translate-y-1 shadow-md border border-white/5"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={`https://tiktok.com/@${TIKTOK}`} 
                target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-black transition-all hover:-translate-y-1 shadow-md border border-white/5"
                title="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-8 text-[#FFD700] flex items-center gap-2">
                <span className="w-6 h-1 bg-[#FFD700] rounded-full"></span>
                Services
            </h5>
            <ul className="space-y-4 text-sm font-bold text-blue-100/70">
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Roof Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Car Wash</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>House Deep Clean</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Carpet Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-8 text-[#FFD700] flex items-center gap-2">
                <span className="w-6 h-1 bg-[#FFD700] rounded-full"></span>
                Contact
            </h5>
            <ul className="space-y-5 text-sm font-bold text-blue-100/80">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#FFD700] w-5 h-5 flex-shrink-0" />
                <span>Nairobi, Kenya<br/><span className="text-[10px] opacity-50 uppercase tracking-widest font-black">ANU Local Area</span></span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#FFD700] w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors truncate">{EMAIL}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-8 text-[#FFD700] flex items-center gap-2">
                <span className="w-6 h-1 bg-[#FFD700] rounded-full"></span>
                Mission
            </h5>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-inner">
              <p className="text-xs text-blue-100/70 leading-relaxed font-medium">
                Every booking directly supports the Sunshine Student Fund, empowering education and practical skill building for ANU students.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/30 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2024 Sunshine Cleaning Enterprise. Empowering ANU Youth.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-blue-100/20">
            <a href="#" className="hover:text-[#FFD700] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FFD700] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
