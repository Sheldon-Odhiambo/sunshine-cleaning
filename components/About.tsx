
import React from 'react';
import { VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 overflow-hidden bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=500" 
                alt="Student Handshake" 
                className="rounded-[40px] shadow-2xl h-80 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=500" 
                alt="Cleaning in Progress" 
                className="rounded-[40px] shadow-2xl h-80 object-cover"
              />
            </div>
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-blue-50/50 rounded-full blur-[100px] -z-0"></div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#003366] text-white p-8 rounded-3xl shadow-2xl z-20">
              <p className="text-4xl font-black mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Student Run</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-in fade-in slide-in-from-right duration-700">
            <h2 className="text-blue-primary text-sm font-black uppercase tracking-[0.3em] mb-4">The Student Difference</h2>
            <h2 className="text-5xl font-black text-[#003366] mb-8 leading-tight">University Powered<br/><span className="text-[#FFD700]">Integrity & Energy</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium opacity-80">
              Sunshine Cleaning Enterprise is a student-driven initiative born out of ANU. We combine academic discipline with industrial cleaning expertise to deliver a service that is both reliable and exceptionally thorough.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {VALUES.map((val) => (
                <div key={val.title} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border-l-4 border-[#FFD700] hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#003366]">
                    {val.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#003366]">{val.title}</h4>
                </div>
              ))}
            </div>

            <div className="bg-[#003366] p-8 rounded-[32px] border border-blue-900 shadow-xl shadow-blue-900/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-800" src={`https://i.pravatar.cc/150?u=anu${i}`} alt="Student" />)}
                </div>
                <p className="font-black text-white text-lg">Our Promise</p>
              </div>
              <p className="text-blue-100 italic font-medium leading-relaxed">
                "We don't just clean; we restore. As ANU students, we bring our school's values of excellence and character to every home we touch."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
