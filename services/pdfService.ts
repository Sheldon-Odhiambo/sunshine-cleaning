
import { jsPDF } from 'jspdf';
import { BookingData } from '../types';
import { PHONE_NUMBER, EMAIL, BUSINESS_NAME } from '../constants';

export const generateBookingPDF = async (data: BookingData, reference: string) => {
  const doc = new jsPDF();
  
  const bluePrimary = [0, 51, 102]; // #003366
  const yellowAccent = [255, 215, 0]; // #FFD700
  
  // --- Header Section ---
  doc.setFillColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]); 
  doc.rect(0, 0, 210, 55, 'F');
  
  // --- Branding Text (In place of logo) ---
  doc.setTextColor(yellowAccent[0], yellowAccent[1], yellowAccent[2]);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('SUNSHINE', 20, 25);
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('CLEANING ENTERPRISE', 20, 32);
  doc.setFont('helvetica', 'normal');
  doc.text('ANU Student Initiative', 20, 36);

  // --- Company Contact Info (Right Aligned) ---
  doc.setFontSize(9);
  doc.text([
    'Nairobi, Kenya',
    `Tel: ${PHONE_NUMBER}`,
    `Email: ${EMAIL}`,
    'www.sunshinecleaning.ke'
  ], 190, 22, { align: 'right' });

  // --- Service Body ---
  doc.setTextColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('SERVICE BOOKING', 105, 75, { align: 'center' });
  
  doc.setDrawColor(yellowAccent[0], yellowAccent[1], yellowAccent[2]);
  doc.setLineWidth(0.8);
  doc.line(50, 80, 160, 80);

  const startY = 100;
  const lineSpacing = 12;
  
  const details = [
    ['Booking Ref:', reference],
    ['Client Name:', data.name.toUpperCase()],
    ['Phone Number:', data.phone],
    ['Service Type:', data.service],
    ['Preferred Date:', data.date],
    ['Location:', data.address]
  ];

  details.forEach(([label, value], index) => {
    const y = startY + (index * lineSpacing);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(140, 140, 140);
    doc.text(label, 40, y);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
    doc.text(value || 'N/A', 85, y);
    
    doc.setDrawColor(245, 245, 245);
    doc.line(40, y + 4, 170, y + 4);
  });

  // --- Footer Section ---
  const pageHeight = doc.internal.pageSize.height;
  doc.setFillColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
  doc.rect(0, pageHeight - 45, 210, 45, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Thank you for supporting student excellence!', 105, pageHeight - 30, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(yellowAccent[0], yellowAccent[1], yellowAccent[2]);
  doc.text('This document confirms your service request. Our team will contact you for a final quote.', 105, pageHeight - 22, { align: 'center' });
  doc.text('Integrity | Energy | Professionalism', 105, pageHeight - 16, { align: 'center' });

  // QR Code linking to WhatsApp
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/${PHONE_NUMBER.replace(/\s+/g, '')}`;
  try {
    doc.addImage(qrUrl, 'PNG', 170, pageHeight - 38, 28, 28);
    doc.setFontSize(6);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('SCAN TO CHAT', 184, pageHeight - 8, { align: 'center' });
  } catch (e) {
    console.error("QR Code Error", e);
  }

  doc.save(`Sunshine_Service_${reference}.pdf`);
};
