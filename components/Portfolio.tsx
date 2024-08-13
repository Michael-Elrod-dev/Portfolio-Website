// components/Portfolio.tsx
import Image from 'next/image'

const projects = [
  {
    title: "AI Drone Pollination",
    description: "This project is ongoing and simulates a swarm of drones navigating a field to pollinate flowers.",
    image: "/AIDronePollinator.png",
    github: "https://github.com/Michael-Elrod-dev/AI-Drone-Pollinator"
  },
  // Add more projects here
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">My Portfolio</h2>
        <p className="text-lg mb-12">
          A small gallery of recent projects chosen by me. Some of the projects
          were done together with amazing peers from my university while others
          were passion projects I pursued in my free time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}