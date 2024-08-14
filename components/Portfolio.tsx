// components/Portfolio.tsx
import Image from 'next/image'

const projects = [
  {
    title: "Deep Reinforcement Learning",
    description: "Implemented various Deep Q-Networks (DQN) using Python & PyTorch to solve single and multi-agent environments through Open AI's Gymnasium & MiniGrid. Applied solutions to quick time events in video games.",
    image: "/images/deep-reinforcement-learning.png",
    github: "https://github.com/Michael-Elrod-dev/Deep-Reinforcement-Learning"
  },
  {
    title: "Machine Learning",
    description: "Implemented multiple regression models, K-means clustering, logistic regression, and SVM classifiers. Utilized cross-validation, feature scaling, and gradient descent optimization.",
    image: "/images/machine-learning.png",
    github: "https://github.com/Michael-Elrod-dev/Machine-Learning-Examples"
  },
  {
    title: "Computer Vision",
    description: "Implemented Canny edge detection, facial detection system, panorama image stitching, and optical flow algorithms for various computer vision tasks.",
    image: "/images/computer-vision.png",
    github: "https://github.com/Michael-Elrod-dev/Computer-Vision/tree/main"
  },
  {
    title: "Cloud Architecture",
    description: "Studied and practiced use cases and implementations of several Amazon Web Services to develop and host scalable applications using a serverless architecture.",
    image: "/images/cloud-architecture.png",
    github: "https://github.com/Michael-Elrod-dev"
  },
  {
    title: "SQL Database Management",
    description: "Designed and implemented normalized SQL databases, applying 1NF, 2NF, and 3NF principles. Developed a Java-based application simulating a multi-user customer service environment.",
    image: "/images/sql-database.png",
    github: "https://github.com/Michael-Elrod-dev/SQL-Database-Application"
  },
  {
    title: "Interactive Software",
    description: "Developed two separate interactive game engines using C++ & Python, leveraging object-oriented programming principles and design patterns for optimized performance.",
    image: "/images/interactive-software.png",
    github: "https://github.com/Michael-Elrod-dev/2D-Game-Engines"
  },
  {
    title: "Software Architecture",
    description: "Implemented Model-View-Controller, Observer pattern, and Decorator techniques to study and apply various software architecture principles.",
    image: "/images/software-architecture.png",
    github: "https://github.com/Michael-Elrod-dev/Software-Architecture/tree/main"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">My Portfolio</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-8">
            <p className="text-lg mb-6">
              Here is a gallery of some relevant projects I've worked on. These projects
              are a collection of advanced AI research, fully deployed web & mobile 
              applications, machine learning algorithms, conceptual study, as well
              as some projects I worked on for fun!
            </p>
            <p className="text-lg mb-6">
              Each topic includes a link to one or more github projects where the tech 
              is implemented. If you have any questions or would like more information 
              please feel free to reach out using the form below or my LinkedIn located 
              in the header.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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