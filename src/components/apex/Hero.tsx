import React, { useEffect } from 'react';
import { MdOutlineQueryStats } from 'react-icons/md';
import Button from '../common/Button';
import heroFolderLogoUrl from '../../assets/hero-folder-logo.png';
import { PiStrategyBold } from 'react-icons/pi';
import { BiStats } from 'react-icons/bi';
import { TbHeartStar, TbHomeStats } from 'react-icons/tb';
import { LuFolderHeart, LuMapPinCheck } from 'react-icons/lu';
import { TfiStatsUp } from 'react-icons/tfi';
import { FaMapLocationDot } from 'react-icons/fa6';
import { useScroll } from '../../context/ScrollContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const { homeRef, scrollToSection } = useScroll();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quad',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div
      ref={homeRef}
      className="min-h-screen relative w-full pt-44 md:pt-32 lg:pt-44"
    >
      <HeroIllustractionCard
        label="99.9% Uptime Guarantee"
        className="top-32 xl:scale-100 scale-60 -rotate-[11deg] xl:left-8 left-0 md:block hidden"
        icon={<BiStats className="text-[#0905c4] text-2xl" />}
        logo={<PiStrategyBold className="text-[#0905C4] text-5xl" />}
        data-aos="fade-right"
        data-aos-delay="100"
      />
      <HeroIllustractionCard
        label="Security Certified"
        className="top-32 xl:scale-100 scale-60  -rotate-[11deg] xl:right-16 right-0 md:block hidden"
        icon={<TbHeartStar className="text-[#2291D2] text-2xl" />}
        logo={<LuFolderHeart className="text-[#2291D2] text-5xl" />}
        data-aos="fade-left"
        data-aos-delay="100"
      />
      <HeroIllustractionCard
        label="100+ Enterprise Clients"
        className="bottom-32 xl:scale-100 scale-60  -rotate-[11deg] xl:right-40 right-20 md:block hidden"
        icon={<LuMapPinCheck className="text-[#057BC4] text-2xl" />}
        logo={<FaMapLocationDot className="text-[#057BC4] text-5xl" />}
        data-aos="fade-left"
        data-aos-delay="200"
      />
      <HeroIllustractionCard
        label="24/7 Support"
        className="bottom-32  rotate-[11deg] xl:left-16 left-0 2xl:scale-110 xl:scale-100 scale-60  md:block hidden"
        icon={<TbHomeStats className="text-[#05C458] text-2xl" />}
        logo={<TfiStatsUp className="text-[#05C458] text-5xl" />}
        data-aos="fade-right"
        data-aos-delay="200"
      />

      <div className="container mx-auto flex flex-col relative z-10 items-center">
        <div
          style={{
            boxShadow: '0 0 20px rgba(0,0,0,0.18)',
          }}
          className="h-12 w-12 flex items-center justify-center rounded-lg"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <MdOutlineQueryStats className="text-xl text-primary" />
        </div>
        <h1
          className="text-[32px] md:text-[48px] xl:text-[56px] text-primary font-semibold 2xl:w-3/5 w-4/5 leading-[1.2] text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <span className="text-secondary">Enterprise-Grade Solutions,</span> Scalable
          Architecture,{' '}
          <span className="text-black/20">Exceptional Performance</span>.
        </h1>
        <p
          className="mt-10 text-lg md:text-xl font-normal w-full md:w-96 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Cloud migration, microservices, DevOps automation, and enterprise security for large organizations.
        </p>
        <div
          className="mt-8 flex flex-col md:flex-row items-center gap-y-3 md:gap-x-3"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <Button
            handleClick={() => scrollToSection('services')}
            title="Explore Services"
            className="px-12 py-2.5"
          />
          <Button
            handleClick={() => scrollToSection('contact')}
            title="Get in touch"
            variant="outlined"
            className="px-12 py-2.5"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

interface HeroIllustractionCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  logo: React.ReactNode;
  label: string;
  icon: React.ReactNode;
  'data-aos'?: string;
  'data-aos-delay'?: string;
}

const HeroIllustractionCard: React.FC<HeroIllustractionCardProps> = ({
  className,
  logo,
  label,
  icon,
  ...props
}) => {
  const baseDelay = props['data-aos-delay']
    ? parseInt(props['data-aos-delay'])
    : 0;

  return (
    <div
      className={`${className} h-48 w-64 sm:h-36 sm:w-48 absolute z-0 md:h-40 md:w-56 lg:h-48 lg:w-64`}
      {...props}
    >
      <div
        style={{ boxShadow: '0 0 15px rgba(0,0,0,0.15)' }}
        className="h-12 w-12 absolute top-12 -right-5 z-10 bg-white rounded-lg flex items-center justify-center"
        data-aos="zoom-in"
        data-aos-delay={String(baseDelay + 100)}
      >
        <span>{icon}</span>
      </div>
      <img
        src={heroFolderLogoUrl}
        className="absolute z-0 h-full w-full object-cover"
        data-aos="zoom-in"
        data-aos-delay={String(baseDelay + 50)}
      />
      <div
        className="flex flex-col gap-y-4 w-full py-16 h-full absolute inset-0 items-center"
        data-aos="fade-in"
        data-aos-delay={String(baseDelay + 150)}
      >
        <span>{logo}</span>
        <h1 className="text-xs text-light">{label}</h1>
      </div>
    </div>
  );
};
