import { Link } from "react-router";

const Pawel = () => {
  const techIcons = [
    { src: "public/icons/html-5.png", alt: "Html" },
    { src: "public/icons/css-3.png", alt: "CSS" },
    { src: "public/icons/TypeScript.png", alt: "TypeScript" },
    { src: "public/icons/React.png", alt: "React" },
    { src: "public/icons/Tailwind CSS.png", alt: "Tailwind" },
  ];
  const projects = [
    {
      title: "Beispiel projekt 1",
      description: "Beispiel description blabla bla bla bla bla blablablab bla",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      image: "public/under-construction.jpg",
      github: "https://beispiel.de",
      demo: "https://beispiel-url.de",
      leftSide: false,
    },
    {
      title: "Beispiel projekt 2",
      description: "Beispiel description blabla bla bla bla bla blablablab bla",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      image: "public/under-construction.jpg",
      github: "https://beispiel.de",
      demo: "https://beispiel-url.de",
      leftSide: true,
    },
    {
      title: "Beispiel projekt 3",
      description: "Beispiel description blabla bla bla bla bla blablablab bla",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      image: "public/under-construction.jpg",
      github: "https://beispiel.de",
      demo: "https://beispiel-url.de",
      leftSide: false,
    },
  ];
  return (
    <div className=" font-[Futura] mx-48 overflow-auto scroll-smooth">
      {/*HEADER*/}
      <header className="flex justify-between items-center my-16 font-bold text-2xl">
        <div>Pawel.dev</div>
        <nav>
          <ul className="flex w-2xl justify-between">
            <li className="hover:text-neutral-500">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-neutral-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-neutral-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-neutral-500 text-blue-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/*MAIN*/}
      <section
        id="home"
        className=" h-screen font-bold flex items-center justify-between"
      >
        <div className=" w-1/2 flex flex-col ">
          <h1 className="text-5xl mb-4 text-blue-500">Front-End Developer</h1>
          <p className="text-2xl text-neutral-500">
            Hallo, ich bin Pawel Szoltysek 👋. Ich liebe es, als
            Front-End-Entwickler kreative und moderne Webprojekte umzusetzen.
            Ich komme aus Erkelenz, Deutschland 🇩🇪
          </p>
          <div className="flex mt-4">
            <Link to="https://www.linkedin.com/in/pawel-szoltysek-0b7890299/">
              <a
                href="https://www.linkedin.com/in/pawel-szoltysek-0b7890299/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="linkedin.png" className=" w-10 h-10" alt="linkedin" />
              </a>
            </Link>
            <Link to="https://github.com/PawelSzoltysek93">
              <a
                href="https://github.com/PawelSzoltysek93"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="github-sign.png"
                  className="w-10 h-10 ml-4"
                  alt="github"
                />
              </a>
            </Link>
          </div>
          <div className="text-2xl mt-48 flex">
            Tech Stack{" "}
            {techIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-10 h-10 mx-8"
              />
            ))}
          </div>
        </div>

        <div className=" relative  w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-black [animation:morph_8s_ease-in-out_infinite]" />
          <div className="absolute inset-[4px] overflow-hidden [animation:morph_8s_ease-in-out_infinite]">
            <img
              src="pawel.jpg"
              alt="selfie"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      {/*ABOUT ME*/}
      <section
        id="about"
        className="h-screen flex flex-row-reverse items-center"
      >
        <div className="flex flex-col w-1/2">
          <h2 className="text-5xl font-bold text-blue-500 ml-auto mb-4">
            About me
          </h2>
          <p className="text-2xl text-neutral-500 text-right">
            Hallo, Ich heiße Pawel und suche eine spannende Festanstellung oder
            ein Praktikum im Bereich Web Development, um meine Kenntnisse in
            Frontend-, Backend- und Fullstack-Entwicklung aktiv einzusetzen. Ich
            verfüge über solide Fähigkeiten in React, Next.js, HTML, Tailwind
            CSS, JavaScript, TypeScript, Git und MongoDB und habe diese in
            praxisnahen Projekten erfolgreich angewendet.
          </p>
        </div>
        <div className="">
          <img
            src="aboutMe.jpg"
            alt="aboutMe"
            className="w-3/4 h-auto rounded-4xl border-4"
          />
        </div>
      </section>
      {/*PROJECTS*/}

      <div id="projects" className="h-screen flex flex-col items-center">
        <h2 className="text-5xl font-bold text-blue-500 mb-8">
          Meine Projecte
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Text */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-neutral-500">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-neutral-500 text-white text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons GitHub & Demo */}
                <div className="flex gap-4 mt-4 m-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pawel;
