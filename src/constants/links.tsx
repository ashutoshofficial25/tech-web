import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export interface ISocialProfileProps {
  label: string;
  newTab: boolean;
  link: string;
  icon: React.JSX.Element;
}
export const socialProfiles: ISocialProfileProps[] = [
  { label: "LinkedIn", newTab: true, link: "", icon: <FaLinkedin /> },
  { label: "Instagram", newTab: true, link: "", icon: <FaInstagram /> },
  { label: "Facebook", newTab: true, link: "", icon: <FaFacebook /> },
];
