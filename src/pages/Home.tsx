import { Github, Users, Code, ArrowRight, ExternalLink } from "lucide-react";
import StudentCarousel from "../components/student-carousel";

export default function GitHubCollaborationLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                GitHub Kollaborationsprojekt
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Gemeinsam lernen,
                <br />
                <span className="text-blue-600">gemeinsam entwickeln</span>
              </h1>

              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                Ein Kollaborationsprojekt für WebDev-Studenten. Hier lernen wir
                GitHub-Workflows, Pull Requests und Teamarbeit durch echte
                Projekte.
              </p>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                  <Github className="mr-2 h-5 w-5" />
                  Repository ansehen
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Teilnehmer entdecken
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section id="project" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-sm font-medium w-fit">
                  Über das Projekt
                </div>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lernen durch echte Zusammenarbeit
                </h2>

                <div className="space-y-4 text-gray-600 md:text-lg">
                  <p>
                    In diesem Projekt lernen wir praxisnah, wie moderne
                    Webentwicklung im Team funktioniert. Jeder Teilnehmer
                    erstellt seine eigene Portfolio-Seite und arbeitet dabei mit
                    echten Git-Workflows, Pull Requests und Code Reviews.
                  </p>

                  <p>
                    Wir verwenden aktuelle Technologien wie React, TypeScript
                    und Tailwind CSS. Dabei steht nicht nur das Coding im
                    Vordergrund, sondern auch die Zusammenarbeit: Wie teilt man
                    Code auf? Wie reviewed man fremden Code? Wie löst man
                    Merge-Konflikte?
                  </p>

                  <p>
                    Das Projekt ist vollständig Open Source und transparent.
                    Jeder kann den Fortschritt verfolgen, von anderen lernen und
                    eigene Ideen einbringen. So entsteht eine echte
                    Lerngemeinschaft für angehende Webentwickler.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                    GitHub
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-6">
                    <Code className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Was wir lernen
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Die wichtigsten Skills für moderne Webentwicklung
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Git & GitHub Workflows</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">
                          Pull Requests & Code Reviews
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">
                          Moderne Frontend-Entwicklung
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">
                          Teamarbeit & Kommunikation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Students Carousel */}
        <section
          id="students"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                Unsere Teilnehmer
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Entdecke die Projekte
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Jeder Teilnehmer hat seine eigene Landing Page erstellt. Schau
                dir an, was sie gebaut haben und wie sie ihre Persönlichkeit
                eingebracht haben.
              </p>
            </div>

            <StudentCarousel />
          </div>
        </section>

        {/* GitHub CTA */}
        <section
          id="github"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Github className="h-16 w-16 text-blue-200" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Open Source & Transparent
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                Alle Projekte sind öffentlich auf GitHub verfügbar. Schau dir
                den Code an, lerne von anderen und trage selbst bei!
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 transition-colors">
                  <Github className="mr-2 h-5 w-5" />
                  Zum Repository
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Mitmachen
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
