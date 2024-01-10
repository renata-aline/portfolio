import AboutContainer from './AboutContainer';
import { ProjectsContainer } from './ProjectsContainer';
import TechnologieContainer from './TechnologieContainer';

import '../styles/components/maincontent.sass'


const MainContent = () => {
  return(
    <main id="main-content">
      < AboutContainer/>
      < TechnologieContainer/>
     < ProjectsContainer/> 
    </main>
  )
};

export default MainContent;
