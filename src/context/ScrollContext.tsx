import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  RefObject,
} from 'react';

type ScrollContextType = {
  scrollToSection: (
    sectionId: 'home' | 'about' | 'services' | 'contact'
  ) => void;
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

type ScrollProviderProps = {
  children: ReactNode;
};

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (
    sectionId: 'home' | 'about' | 'services' | 'contact'
  ) => {
    const sectionRefs: Record<string, RefObject<HTMLDivElement>> = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      contact: contactRef,
    };
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToSection, homeRef, aboutRef, servicesRef, contactRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the context
export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
