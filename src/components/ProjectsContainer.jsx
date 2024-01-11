import "../styles/components/projectscontainer.sass";

const projects = [
  {
    id: "1",
    titulo: "teste",
    capa: "../img/pl.jpg",
    link: "https://renata-aline.github.io/pl-contabilidade/",
  },
  {
    id: "1",
    titulo: "teste",
    capa: "../img/pl.jpg",
    link: "https://renata-aline.github.io/pl-contabilidade/",
  },
  {
    id: "1",
    titulo: "teste",
    capa: "../img/pl.jpg",
    link: "https://renata-aline.github.io/pl-contabilidade/",
  },

]







export const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>projetos</h2>
      {/* <div className="projects-grid">
        {projects.map((project) => (
          <div className="projects-card" id={project.id}
          key={project.id}  >
          
          <div>
            <h3>{project.titulo}</h3>
            src={project.capa}
            <a
              target ="_blank"
              href={project.link}
              
              >
            </a>
          </div>

          </div>
        ))}

      </div> */}
      <p></p>
      <a target="_blank" href=" https://github.com/renata-aline" className="btn">
        ver projetos
      </a>
    </section>
  );
};
