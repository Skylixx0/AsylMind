export interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  featureRef: React.RefObject<HTMLElement>;
  pricingRef: React.RefObject<HTMLElement>;
}