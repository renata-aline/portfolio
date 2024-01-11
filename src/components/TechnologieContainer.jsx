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
            {/* <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>tttdtdtdaaa</p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologieContainer;
// const technologies = [
//   {
//     id: "html",
//     name: "HTML5",
//     icon: <DiHtml5 />,
//     // link: " https://linkedin.com/in/renata-aline-oliveira-3a1766270",
//   },
//   {
//     id:"css",
//     name: "CSS3",
//     icon: < DiCss3 />,
//     // link: " https://github.com/renata-aline",
//   },
//   {
//     id: "js",
//     name: "javaScript",
//     icon: <DiJsBadge />,
//     // link: "https://instagram.com/renataaolyveira",
//   },
//   {
//     id: "react",
//     name: "REACT",
//     icon: <DiReact />,
//     // link: "https://instagram.com/renataaolyveira",
//   },
//   {
//     id: "sass",
//     name: "SASS",
//     icon: <DiSass />,
//     // link: "https://instagram.com/renataaolyveira",
//   },
// ];

// const TechnologieContainer = () => {
//   return (
//     <section className="technologies-container">
//       <h2>Tecnologias</h2>
//       <div className="technologies-grid">
//         {technologies.map((tech) => {
//           <div className="technology-card">
//             id={tech.id} key={tech.id}
//             {tech.name}
//             {tech.icon}
//           </div>
//         })}
//       </div>

//       {/* {socialNetworks.map((network) => (
//         <a
//           target="_blank"
//           href={network.link}
//           className="social-btn"
//           id={network.name}
//           key={network.name}
//         >
//           {network.icon}
//         </a>
//       ))} */}
//     </section>
//   );
// };

// export default TechnologieContainer;