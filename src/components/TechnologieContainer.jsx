import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiSass } from "react-icons/di";

import "../styles/components/technologiecontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "javaScript", icon: <DiJsBadge /> },
  { id: "react", name: "REACT", icon: <DiReact /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
];

const TechnologieContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>kkkkkkkkkkkkkkkkkkkk llllllllll ..llooisjsjjsjjj</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologieContainer;
