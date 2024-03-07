import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/foto-renata.png";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Foto da Renata" />
      <p className="title">Desenvolvedora</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://docs.google.com/document/d/1m95l7lhmOpk3F8SIryWzacdMr3K5y0sSKrI149tr8U8/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        Dowload currículo
      </a>
    </aside>
  );
};

export default SideBar;
