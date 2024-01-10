import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: " https://linkedin.com/in/renata-aline-oliveira-3a1766270",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: " https://github.com/renata-aline",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/renataaolyveira",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          target="_blank"
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
