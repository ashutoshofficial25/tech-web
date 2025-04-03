import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  RefObject,
} from "react";

type ScrollContextType = {
  scrollToSection: (
    sectionId: "home" | "about" | "services" | "contact"
  ) => void;
  homeRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  servicesRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

type ScrollProviderProps = {
  children: ReactNode;
};

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const homeRef = useRef<HTMLElement>(null!);
  const aboutRef = useRef<HTMLElement>(null!);
  const servicesRef = useRef<HTMLElement>(null!);
  const contactRef = useRef<HTMLElement>(null!);

  const scrollToSection = (
    sectionId: "home" | "about" | "services" | "contact"
  ) => {
    const sectionRefs: Record<string, RefObject<HTMLElement>> = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      contact: contactRef,
    };
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
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
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
