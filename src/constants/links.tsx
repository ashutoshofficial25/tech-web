import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
export interface ISocialProfileProps {
  label: string;
  newTab: boolean;
  link: string;
  icon: React.JSX.Element;
}
export const socialProfiles: ISocialProfileProps[] = [
  {
    label: 'LinkedIn',
    newTab: true,
    link: 'https://www.linkedin.com/company/kin-productions-india/',
    icon: <FaLinkedin />,
  },
  {
    label: 'Instagram',
    newTab: true,
    link: 'https://www.instagram.com/kin_productions_india?igsh=aDJyZ2N1MHpveDFt',
    icon: <FaInstagram />,
  },
];
