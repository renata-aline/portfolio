import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/foto-perfil.jpg";
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
        href="https://drive.google.com/file/d/1l5dVg_3lUbUVyRn0Ype8CmMaEc2cb1bI/view?usp=drive_link "
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
