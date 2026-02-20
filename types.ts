
export enum ServiceType {
  ROOF = 'Roof Cleaning',
  POST_CONSTRUCTION = 'Post Construction Cleaning',
  DRIVEWAYS = 'Driveways and Patios Cleaning',
  GENERAL_HOUSE = 'General House Cleaning',
  CAR_WASH = 'Car Wash',
  APARTMENT = 'Apartment General Cleaning',
  CARPET = 'Carpet Cleaning',
  FUMIGATION = 'Fumigation Service'
}

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  service: ServiceType;
  date: string;
  address: string;
  notes?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
