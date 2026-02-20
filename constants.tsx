
import React from 'react';
import { 
  Home, 
  Droplets, 
  Car, 
  Trash2, 
  Wind, 
  Layers, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  Star 
} from 'lucide-react';
import { ServiceType } from './types';

export const BUSINESS_NAME = "Sunshine Cleaning Enterprise";
export const PHONE_NUMBER = "0705899851";
export const EMAIL = "sunshinecleaningenterprise@gmail.com";
export const INSTAGRAM = "sunshinecleaningenterprise";
export const TIKTOK = "sunshinecleaningenterprise"; // Placeholder for TikTok

export const SERVICES = [
  { 
    id: ServiceType.ROOF, 
    title: "Roof Cleaning", 
    description: "Specialized pressure washing and debris removal for all roof types.",
    icon: <Layers className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.POST_CONSTRUCTION, 
    title: "Post Construction", 
    description: "Deep cleaning to remove dust and debris after building projects.",
    icon: <Trash2 className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.DRIVEWAYS, 
    title: "Driveways & Patios", 
    description: "High-pressure cleaning to restore your outdoor surfaces.",
    icon: <Wind className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.GENERAL_HOUSE, 
    title: "General House Cleaning", 
    description: "Comprehensive home cleaning for a sparkling living space.",
    icon: <Home className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.CAR_WASH, 
    title: "Professional Car Wash", 
    description: "Detailing and exterior washing for your vehicles.",
    icon: <Car className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.APARTMENT, 
    title: "Apartment Cleaning", 
    description: "Tailored cleaning services for flats and apartments.",
    icon: <Layers className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.CARPET, 
    title: "Carpet Cleaning", 
    description: "Deep fiber cleaning and stain removal for your carpets.",
    icon: <Droplets className="w-6 h-6" /> 
  },
  { 
    id: ServiceType.FUMIGATION, 
    title: "Fumigation Service", 
    description: "Safe and effective pest control for residential spaces.",
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
];

export const VALUES = [
  { title: "Reliable", icon: <CheckCircle className="text-yellow-500" /> },
  { title: "Versatile", icon: <Layers className="text-yellow-500" /> },
  { title: "Empowering", icon: <Users className="text-yellow-500" /> },
  { title: "Trustworthy", icon: <ShieldCheck className="text-yellow-500" /> },
];
