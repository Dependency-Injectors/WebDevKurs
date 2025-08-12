import { BookOpen, Code2, ExternalLink, Mail } from "lucide-react";
const Sven = () => {
  // GitHub SVG Icon Component
  const GitHubIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
  const projects = [
    {
      title: "Portfolio Gruppenprojekt – WebDevKurs",
      description:
        "Lernumgebung um das Arbeiten in einer professionellen Umgebung und in Gruppen zu üben.",
      technologies: [
        "React",
        "Typescript",
        "JavaScript",
        "Tailwind CSS",
        "GitHub workflows",
      ],
      image: "./Team.png",
      github: "https://github.com/Dependency-Injectors/WebDevKurs",
      demo: "https://dependency-injectors.github.io/WebDevKurs/",
    },
    {
      title: "Eco Coach",
      description:
        "Full-Stack Coaching-Platform mit React Frontend, Express.js Backend sowie PostgreSQL. Containerisiert mit Docker und deployed auf AWS mit Nginx Reverse Proxy und Content Security Policy.",
      technologies: ["React", "TypeScript", "Postgres", "Docker", "AWS"],
      image: "./EcoCoach.png",
      github: null, // Private Repository
      demo: "https://sliot.de/",
      isPrivate: true,
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git & GitHub",
    "Docker",
    "AWS",
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Portfolio</h1>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors">
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors">
                <Mail className="w-4 h-4" />
                Kontakt
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <img
              src="./me.JPG"
              alt="Profilbild"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Hallo, ich bin <span className="text-blue-600">Sven Lück</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Leidenschaftlicher Web Development Student mit Fokus auf
              Full-Stack Entwicklung und DevOps. Verwandle Ideen in moderne,
              benutzerfreundliche Web-Anwendungen.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-slate-600">Studium: Web Development</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors mx-auto">
            <Code2 className="w-4 h-4" />
            Meine Projekte
          </button>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">
            Technologien & Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Meine Projekte
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-slate-300 text-slate-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center justify-center gap-2 flex-1 px-3 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                        rel="noreferrer"
                      >
                        <GitHubIcon className="w-4 h-4" />
                        Code
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 flex-1 px-3 py-2 border border-slate-300 text-slate-400 rounded-md cursor-not-allowed bg-slate-50">
                        <GitHubIcon className="w-4 h-4" />
                        Privat
                      </div>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex items-center justify-center gap-2 flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Über mich
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Als angehender Full-Stack Developer entdecke ich täglich neue
                  Technologien und entwickle komplette Web-Anwendungen - vom
                  responsiven Frontend bis zur Backend-API. Mein Fokus liegt auf
                  modernen JavaScript-Frameworks, API-Integration und
                  benutzerfreundlichen Interfaces.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Besonders fasziniert mich die DevOps-Welt mit Docker,
                  CI/CD-Pipelines und Cloud-Deployment. Durch praktische
                  Projekte und kontinuierliches Lernen baue ich meine
                  Fähigkeiten in der gesamten Development-Pipeline aus.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">
                    Aktuell im Web Development Bootcamp
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">
                    Fokus auf Full-Stack, React & TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">
                    Praktikumsplatz ab Dezember gesucht
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">
                    Begeistert und Interessiert mehr über Docker und AWS zu
                    lernen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-slate-800 text-white rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-4">Lass uns vernetzen!</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Suchst du einen motivierten Junior Developer für dein Team? Oder
              hast du Feedback zu meinen Projekten? Ich freue mich auf den
              Austausch und neue Möglichkeiten!
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 hover:bg-slate-100 rounded-lg font-medium transition-colors mx-auto">
              <Mail className="w-4 h-4" />
              Kontakt aufnehmen
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sven;
