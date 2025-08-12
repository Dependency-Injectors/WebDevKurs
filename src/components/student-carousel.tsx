import { ChevronLeft, ChevronRight, ExternalLink, User } from "lucide-react";
import { useState } from "react";

// GitHub SVG Icon Component
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Beispiel-Daten für Studenten
const students = [
  {
    id: 1,
    name: "Sven Lück",
    description: "Full-Stack und Dev-Ops Hoffnung",
    technologies: ["PERN-Stack", "TypeScript", "AWS", "Docker"],
    githubUrl: "https://github.com/33SLueck",
    projectUrl: "#",
    color: "bg-gradient-to-br from-teal-400 to-teal-800",
  },
  {
    id: 2,
    name: "Pawel Szoltysek",
    description: "WebDev Entwickler in Ausbildung",
    technologies: ["Javascript", "CSS", "React"],
    githubUrl: "#",
    projectUrl: "#",
    color: "bg-gradient-to-br from-white via-red-500 to-red-600",
  },
  {
    id: 3,
    name: "Sandra Simon-Schmitt",
    description: "Lehrerin trifft Tech",
    technologies: ["JavaScript", "CSS", "React"],
    githubUrl: "#",
    projectUrl: "#",
    color: "bg-gradient-to-br from-green-100 to-emerald-600",
  },
  {
    id: 4,
    name: "Leon Winde",
    description: "Fachinformatiker und WebDev auf höchstem Niveau",
    technologies: ["React", "Next.js", "PostgreSQL", "Docker", "Java"],
    githubUrl: "#",
    projectUrl: "#",
    color: "bg-gradient-to-br from-orange-100 to-blue-600",
  },
];

export default function StudentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + itemsPerPage >= students.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0
        ? Math.max(0, students.length - itemsPerPage)
        : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const visibleStudents = students.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Zurück
        </button>

        <div className="flex gap-2">
          {Array.from({
            length: Math.ceil(students.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex + itemsPerPage >= students.length}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Weiter
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Student Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleStudents.map(student => (
          <div
            key={student.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-6">
              <div
                className={`w-full h-32 rounded-lg ${student.color} flex items-center justify-center mb-4`}
              >
                <User className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{student.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {student.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {student.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href="https://github.com/33SLueck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <GitHubIcon className="mr-2 h-3 w-3" />
                  GitHub
                </a>
                <a
                  href="https://sliot.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="mr-2 h-3 w-3" />
                  Projekt
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
