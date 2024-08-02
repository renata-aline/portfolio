import "../styles/components/projectscontainer.sass";

const projects = [
  {
    id: "1",
    titulo: "Next Destination",
    descricao:
      "Tecnologias utilizadas no projeto. HTML5, CSS3, JAVASCRIPT,",
    capa: "/portfolio/assets/destination.png",
    link: "https://renata-aline.github.io/next-destination/",
  },
  {
    id: "2",
    titulo: "Mais Bela",
    descricao:
      "Tecnologias utilizadas no projeto. HTML5, CSS3, JAVASCRIPT, REACTJS, SASS",
    capa: "/portfolio/assets/mais-bela.png",
    link: "https://renata-aline.github.io/MaisBela/",
  },
  {
    id: "3",
    titulo: "Barber shop",
    descricao: "Tecnologias utilizadas no projeto. HTML5, CSS3, SASS",
    capa: "/portfolio/assets/barber.png",
    link: "https://renata-aline.github.io/barber-shop/",
  },
  {
    id: "4",
    titulo: "Layout Air",
    descricao: "Tecnologias utilizadas no projeto. HTML5, CSS3, SASS",
    capa: "/portfolio/assets/layout-air.png",
    link: "https://renata-aline.github.io/layout_dia/",
  },
];

export const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="projects-card" id={project.id} key={project.id}>
            <h3>{project.titulo}</h3>
            <p>{project.descricao}</p>
            <img src={project.capa} alt="foto" />
            <a target="_blank"rel="noreferrer" href={project.link} className="button">
              ver projeto
            </a>
          </div>
        ))}
      </div>

      <a
        target="_blank"
        href=" https://github.com/renata-aline"
        className="btn"
      >
        Mais projetos
      </a>
    </section>
  );
};
