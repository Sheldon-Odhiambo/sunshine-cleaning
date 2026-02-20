
import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, FileDown, Phone, MapPin, Sparkles, Loader2, MessageSquare, ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
import { ServiceType, BookingData } from '../types';
import { PHONE_NUMBER } from '../constants';
import { generateBookingConfirmation } from '../services/geminiService';
import { generateBookingPDF } from '../services/pdfService';

const SERVICE_QUOTES: Record<string, string> = {
  [ServiceType.ROOF]: "Ksh 5,000 - 12,000",
  [ServiceType.POST_CONSTRUCTION]: "Ksh 8,000 - 18,000",
  [ServiceType.DRIVEWAYS]: "Ksh 2,500 - 6,000",
  [ServiceType.GENERAL_HOUSE]: "Ksh 1,500 - 4,500",
  [ServiceType.CAR_WASH]: "Ksh 400 - 1,200",
  [ServiceType.APARTMENT]: "Ksh 2,000 - 5,000",
  [ServiceType.CARPET]: "Ksh 800 - 2,500",
  [ServiceType.FUMIGATION]: "Ksh 2,000 - 5,500",
};

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const confirmationRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    service: ServiceType.GENERAL_HOUSE,
    date: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<ServiceType>;
      if (customEvent.detail) {
        setFormData(prev => ({ ...prev, service: customEvent.detail }));
        setSubmitted(false);
      }
    };

    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const ref = 'SUN-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    try {
      await generateBookingConfirmation(formData, ref);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setBookingRef(ref);
      setSubmitted(true);
      
      setTimeout(() => {
        confirmationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      await generateBookingPDF(formData, bookingRef);
    } catch (err) {
      console.error("PDF generation failed", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const sendWhatsAppNotification = () => {
    const text = `Hello Sunshine Team! I have a new booking request.\n\n*Ref:* ${bookingRef}\n*Name:* ${formData.name}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Address:* ${formData.address}\n\nPlease confirm availability. Thanks!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER.replace(/\s+/g, '')}?text=${encoded}`, '_blank');
  };

  if (submitted) {
    return (
      <section id="booking-confirmation" ref={confirmationRef} className="py-8 md:py-12 bg-gray-50/30">
        <div className="max-w-md mx-auto px-4">
          <div className="mb-4 flex items-center justify-between">
            <button 
              onClick={() => setSubmitted(false)}
              className="flex items-center gap-1.5 text-[#003366] font-bold py-2 px-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:bg-blue-50 transition-all text-[10px]"
            >
              <ArrowLeft size={12} /> New Request
            </button>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
              ID: {bookingRef}
            </div>
          </div>

          <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100">
            {/* Professional Card Header */}
            <div className="bg-[#003366] p-5 text-white text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700] opacity-10 rounded-full -mr-10 -mt-10"></div>
               <div className="relative z-10">
                 <div className="bg-[#FFD700] w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
                   <Sparkles className="text-[#003366] w-4 h-4" />
                 </div>
                 <h4 className="text-sm font-black uppercase tracking-[0.2em] leading-none">Booking Service</h4>
                 <p className="text-[8px] text-blue-200 font-bold tracking-widest mt-1 opacity-80">Sunshine Cleaning Enterprise</p>
               </div>
            </div>

            {/* Compact Card Body */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Customer</p>
                  <p className="text-xs font-black text-gray-900 leading-tight">{formData.name}</p>
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</p>
                  <p className="text-xs font-black text-gray-900 leading-tight">{formData.date}</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Selected Service</p>
                <p className="text-xs font-black text-[#003366]">{formData.service}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Quote Estimate</p>
                <p className="text-lg font-black text-[#003366]">{SERVICE_QUOTES[formData.service]}</p>
              </div>

              <div className="flex items-center gap-2 text-[9px] text-gray-500 font-bold bg-blue-50/30 p-2.5 rounded-lg">
                 <MapPin size={12} className="text-[#003366] flex-shrink-0" />
                 <span className="truncate">{formData.address}</span>
              </div>
            </div>

            <div className="bg-gray-100 px-5 py-2.5 text-[7px] text-gray-400 font-black text-center uppercase tracking-[0.2em]">
               Support ANU Students • Integrity First
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button 
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="w-full flex items-center justify-center gap-2 bg-[#FFD700] text-[#003366] py-3.5 rounded-xl font-black text-xs hover:bg-yellow-500 transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              {isDownloading ? <Loader2 className="animate-spin" size={16} /> : <><FileDown size={16} /> Download Service Confirmation</>}
            </button>
            <button 
              onClick={sendWhatsAppNotification}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-black text-xs hover:bg-green-600 transition-all shadow-md active:scale-95"
            >
              <MessageSquare size={16} /> WhatsApp Alert Owner
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div id="booking-section" className="scroll-mt-24">
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#003366] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border-4 border-white ring-1 ring-gray-100">
            <div className="md:w-2/5 bg-[#FFD700] p-8 md:p-12 flex flex-col justify-center text-[#003366]">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight uppercase">Instant<br/>Quote</h3>
              <p className="font-bold opacity-80 mb-6 text-[10px] leading-relaxed">
                Fill this form to receive your professional service confirmation and pricing estimate immediately.
              </p>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="e.g. Samuel K."
                      className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#FFD700] outline-none transition-all font-bold text-[#003366] text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="07XX XXX XXX"
                      className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#FFD700] outline-none transition-all font-bold text-[#003366] text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Service</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#FFD700] outline-none transition-all appearance-none cursor-pointer font-bold text-[#003366] text-xs"
                    >
                      {Object.values(ServiceType).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Date</label>
                    <input 
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date" 
                      className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#FFD700] outline-none transition-all font-bold text-[#003366] text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Physical Address</label>
                  <input 
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Area, House No, Landmark"
                    className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#FFD700] outline-none transition-all font-bold text-[#003366] text-xs"
                  />
                </div>

                <div className="hidden">
                  <input name="email" value={formData.email || 'client@example.com'} onChange={handleChange} type="email" />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-[#003366] text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-lg active:scale-95 disabled:opacity-70 group"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      Confirm & Book Service <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingForm;
