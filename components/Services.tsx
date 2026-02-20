
import React from 'react';
import { SERVICES } from '../constants';
import { ServiceType } from '../types';

const SERVICE_IMAGES: Record<string, string> = {
  [ServiceType.ROOF]: "https://images.unsplash.com/photo-1635339001358-fc243030619c?auto=format&fit=crop&q=80&w=800",
  [ServiceType.POST_CONSTRUCTION]: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800",
  [ServiceType.DRIVEWAYS]: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
  [ServiceType.GENERAL_HOUSE]: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
  [ServiceType.CAR_WASH]: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800",
  [ServiceType.APARTMENT]: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
  [ServiceType.CARPET]: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800",
  [ServiceType.FUMIGATION]: "https://images.unsplash.com/photo-1584622781514-f634aba60c45?auto=format&fit=crop&q=80&w=800",
};

const Services: React.FC = () => {
  const handleBookNow = (service: ServiceType) => {
    // Dispatch event to pre-fill the form
    const event = new CustomEvent('select-service', { detail: service });
    window.dispatchEvent(event);
    
    // Scroll to the booking form container
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#003366] text-xs font-black uppercase tracking-[0.3em] mb-3">Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#003366]">Pristine Services</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Experience the excellence of university-powered cleaning. Select a service below to book instantly.</p>
        </div>
        
        {/* Pinterest Style Layout on Mobile (columns-2), Grid on Desktop */}
        <div className="columns-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 space-y-4 md:space-y-0">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="break-inside-avoid mb-4 md:mb-0 group bg-white rounded-2xl md:rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => handleBookNow(service.id as ServiceType)}
            >
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-video">
                <img 
                  src={SERVICE_IMAGES[service.id]} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl text-[#003366] shadow-sm md:hidden">
                  {service.icon}
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col flex-grow bg-white">
                <h4 className="text-sm md:text-lg font-black text-[#003366] mb-1 md:mb-2 line-clamp-1">{service.title}</h4>
                <p className="text-gray-500 text-[10px] md:text-sm leading-tight md:leading-relaxed mb-3 line-clamp-2">
                  {service.description}
                </p>
                <button 
                  className="mt-auto inline-flex items-center justify-center w-full py-2 md:py-3 bg-[#003366]/5 text-[#003366] text-[10px] md:text-xs font-black rounded-lg md:rounded-xl group-hover:bg-[#FFD700] transition-all uppercase tracking-widest"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
