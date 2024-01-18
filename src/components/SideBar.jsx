
import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/foto-renata.png";
import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";


const SideBar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Foto da Renata" />
      <p className="title">Desenvolvedora renata</p>
      < SocialNetworks />
      <InformationContainer/>
      <a href="" className="btn">Dowload currículo</a>
    </aside>
  )
};

export default SideBar;
