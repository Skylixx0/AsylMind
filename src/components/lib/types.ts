// interface NavbarProps {
//   mission: string;
//   progress: string;
//   feature: string;
//   price: string;
//   get_started: string;
//   menu: string;
// }

export interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  featureRef: React.RefObject<HTMLElement>;
  pricingRef: React.RefObject<HTMLElement>;
  missionRef: React.RefObject<HTMLElement>;
  growthRef: React.RefObject<HTMLElement>;
  t: (key: string, values?: Record<string, any>) => string;
}
