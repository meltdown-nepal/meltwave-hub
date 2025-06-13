
export interface AppScreen {
  title: string;
  description: string;
  image: string;
  delay: number;
  width: number;
  height: number;
  hasLongContent: boolean;
}

export const appScreens: AppScreen[] = [
  {
    title: "Home Dashboard",
    description: "Track wellness activities",
    image: "/lovable-uploads/cb77fb1c-31c1-4d8b-a847-ec0e19c72cc3.png",
    delay: 0.2,
    width: 390,
    height: 844,
    hasLongContent: true
  },
  {
    title: "QR Check-In",
    description: "Seamless venue check-ins",
    image: "/lovable-uploads/ae12e042-70fd-4d39-84e7-1d419fc5a18d.png",
    delay: 0.4,
    width: 390,
    height: 844,
    hasLongContent: false
  },
  {
    title: "Leaderboard",
    description: "Company rankings",
    image: "/lovable-uploads/1afeb7f0-633e-4f9d-8c6a-7c3ce21c9c97.png",
    delay: 0.6,
    width: 390,
    height: 844,
    hasLongContent: true
  },
  {
    title: "Profile Dashboard",
    description: "Track your CO₂ savings & impact",
    image: "/lovable-uploads/6bfb027a-b127-4050-97d6-30abfb2b2565.png",
    delay: 0.8,
    width: 390,
    height: 844,
    hasLongContent: true
  }
];
