const projects = [

  {
    title: "to do list",
    description: "A simple and intuitive to-do list website that helps you organize tasks.",
    tech: "HTML CSS JavaScript",
    link: "https://hex-project.netlify.app/to%20do%20list%20site/pronote.html"
  },

  {
    title: "Professional Blog",
    description: "Modern blog platform to share your articles and build a community.",
    tech: "HTML CSS JavaScript",
    link: "https://hex-project.netlify.app/blog%20site/index1.html"
  }

];

function ProjectCard(props) {

  return (

    <div className="project-card">

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <p>
        <strong>Technologies :</strong> {props.tech}
      </p>

      <a href={props.link} target="_blank">
        Voir Projet
      </a>

    </div>

  );

}

function Projects() {

  return (

    <div>

      {
        projects.map((project, index) => (

          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />

        ))
      }

    </div>

  );

}

ReactDOM.createRoot(
  document.getElementById("projects")
).render(<Projects />);

function ContactForm() {

  return (

    <form id="contactForm">

      <input
        type="text"
        id="name"
        placeholder="Votre nom"
      />

      <input
        type="email"
        id="email"
        placeholder="Votre email"
      />

      <textarea
        id="message"
        placeholder="Votre message"
      ></textarea>

      <button type="submit">
        Envoyer
      </button>

    </form>

  );

}

ReactDOM.createRoot(
  document.getElementById("contact")
).render(<ContactForm />);