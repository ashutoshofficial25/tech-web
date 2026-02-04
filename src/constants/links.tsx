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
    link: 'https://www.linkedin.com/company/reactcube-tech/',
    icon: <FaLinkedin />,
  },
  {
    label: 'Instagram',
    newTab: true,
    link: 'https://www.instagram.com/reactcube_tech',
    icon: <FaInstagram />,
  },
];
