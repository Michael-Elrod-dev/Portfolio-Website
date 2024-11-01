// components/Experience.tsx

const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "Independence County Contracting",
      date: "Aug 2024 – current",
      details: [
        "Led end-to-end development as sole engineer, directly engaging with clients to gather and refine requirements for a project management web application",
        "Architected and deployed a full-stack solution serving 100+ daily users, optimizing cost-efficiency through strategic client-side rendering with Next.js and AWS RDS with MySQL",
        "Built and engineered robust cloud infrastructure using AWS Amplify for CI/CD, achieving reliable uptime while maintaining low operational costs"
      ]
    },
    {
      title: "Machine Learning Engineer - Intern",
      company: "Naval Information Warfare Center (Pacific)",
      date: "Oct 2024 – current",
      details: [
        "Worked in a collaborative environment to research and propose a machine learning solution to dynamically locate and decode unique QR codes for the purpose of measuring atmospheric turbulence from images",
        "Developed the proposed solution using a mixture of predefined ML models and python libraries such as QReader, OpenCV and YOLO, a real-time object detection framework"
      ]
    },
    {
      title: "Machine Learning Engineer - Intern",
      company: "MIT Lincoln Laboratory",
      date: "May 2024 – Aug 2024",
      details: [
        "Researched and developed a graph neural network solution that demonstrated a 25% performance improvement over standard DQN approaches for multi-agent path planning, leveraging inherent message-passing capabilities for enhanced UAV collaboration",
        "Accelerated training process by 2x through parallel computing implementation at the Lincoln Laboratory Super-computing Center (LLSC), efficiently decoupling agent experiences"
      ]
    },
    {
      title: "Graduate AI Researcher",
      company: "Clemson University",
      date: "Aug 2023 – current",
      details: [
        "Researched and implemented the conversion of a traditional mathematical solution for drone swarm plant pollination to a deep reinforcement learning approach by combining graph neural networks and deep q-learning using Python & PyTorch to facilitate communication between drones with limited fields of view",
        "Worked with other student researchers to engineer the architecture in a collaborative lab environment"
      ]
    },
    {
      title: "Full-Stack Software Engineer",
      company: "Naval Information Warfare Center (Atlantic)",
      date: "Jan 2023 – Dec 2023",
      details: [
        "Led collaboration with the Blue Ridge Innovation Foundation to develop a STEM-focused educational mobile app as part of the NIWC STEM Outreach Program",
        "Engineered the RESTful API using TypeScript with Docker for local hosting, and implemented the Flutter-based frontend with integrated API endpoints",
        "Deployed the solution on AWS and managed the development workflow using Figma for collaborative design"
      ]
    },
    {
      title: "Software Engineer - Intern",
      company: "BlueCross BlueShield of SC",
      date: "May 2023 – Aug 2023",
      details: [
        "Engineered an autonomous database cleaning tool to identify and remove unused objects from the department's database, resulting in a 12% reduction in storage usage using Python & Selenium",
        "Collaborated with cross-functional teams to implement new features for client contact centers using Java, Python, and other proprietary software"
      ]
    }
  ];
  
  export default function Experience() {
    return (
      <section id="experience" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-zinc-300">{exp.company}</p>
                  </div>
                  <span className="text-zinc-400">{exp.date}</span>
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex">
                      <span className="mr-4">•</span>
                      <span className="text-zinc-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }