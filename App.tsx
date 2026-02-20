
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Footer from './components/Footer';
import { PHONE_NUMBER } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Persistent WhatsApp Floating Button */}
        <a 
          href={`https://wa.me/${PHONE_NUMBER.replace(/\s+/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform no-print"
          title="Chat with the Owner"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>

        <Services />
        
        <About />
        
        {/* Booking Section */}
        <div id="booking" className="relative overflow-hidden bg-white scroll-mt-24">
           <div className="absolute inset-0 w-full h-full bg-gray-50 -z-10"></div>
           <div className="relative z-10">
             <BookingForm />
           </div>
        </div>

        {/* Review Highlights */}
        <section className="py-24 bg-[#FFD700] no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h3 className="text-3xl font-black text-[#003366] mb-12">Client Feedback</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { q: "Dust-free and sparkling after my renovation. Highly recommend!", a: "Sarah M., Karen" },
                 { q: "Professional team of students. My driveway looks brand new.", a: "David K., Westlands" },
                 { q: "Efficient, polite, and very affordable cleaning service.", a: "James L., Langata" }
               ].map((rev, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-[#003366]">
                    <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                      {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                    </div>
                    <p className="text-[#003366] font-medium mb-6 italic">"{rev.q}"</p>
                    <p className="text-sm font-bold uppercase text-gray-500">— {rev.a}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
