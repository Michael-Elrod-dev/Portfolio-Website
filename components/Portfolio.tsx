// components/Portfolio.tsx
/* eslint-disable react/no-unescaped-entities */
import Image from "next/legacy/image"

const projects = [
  {
    title: "Neural Networks for Classification & Path Finding",
    description: "Implemented various Deep Q-Networks & Graph Neural Networks using Python & PyTorch to solve single and multi-agent environments through Open AI's Gymnasium & MiniGrid. Applied solutions to quick time events in video games using real time image classification.",
    image: "/images/deep-reinforcement-learning.png",
    github: "https://github.com/Michael-Elrod-dev/Deep-Reinforcement-Learning"
  },
  {
    title: "Machine Learning Models",
    description: "Implemented multiple regression models, K-means clustering, logistic regression, and SVM classifiers. Utilized cross-validation, feature scaling, and gradient descent optimization.",
    image: "/images/machine-learning.png",
    github: "https://github.com/Michael-Elrod-dev/Machine-Learning-Examples"
  },
  {
    title: "STEM Mobile Apllication",
    description: "Collaborated with the Blue Ridge Innovation and Entrepreneurship Foundation to develop a STEM-focused educational mobile app to provide an accessible learning platform for underprivileged students at The Dream Center in Easley, SC as a part of the NIWC STEM Outreach Program",
    image: "/images/mock-up.png",
    github: "https://github.com/Michael-Elrod-dev/BRIEF-Mobile-App-API"
  },
  {
    title: "Project Management Application",
    description: "Architected and deployed a full-stack solution serving 100+ daily users, optimizing cost-efficiency through strategic client-side rendering with Next.js and AWS RDS with MySQL. Built and engineered robust cloud infrastructure using AWS Amplify for CI/CD.",
    image: "/images/web-design.png",
    github: "https://github.com/Michael-Elrod-dev/JM-Web-Application"
  },
  {
    title: "Computer Vision",
    description: "Implemented Canny edge detection, facial detection system, panorama image stitching, and optical flow algorithms for various computer vision tasks.",
    image: "/images/computer-vision.png",
    github: "https://github.com/Michael-Elrod-dev/Computer-Vision"
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
    title: "Game Engine Architecture",
    description: "Engineered two complete game engines from scratch in C++ and Python, implementing core systems including physics, rendering, and entity management. Optimized for 60+ FPS with 200+ simultaneous entities using component-based architecture.",
    image: "/images/interactive-software.png",
    github: "https://github.com/Michael-Elrod-dev/2D-Game-Engines"
  },
  {
    title: "Software Architecture",
    description: "Implemented Model-View-Controller, Observer pattern, and Decorator techniques to study and apply various software architecture principles.",
    image: "/images/software-architecture.jpg",
    github: "https://github.com/Michael-Elrod-dev/Software-Architecture"
  }
]


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-red-600">My Portfolio</h2>
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
            <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="mt-auto flex justify-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}