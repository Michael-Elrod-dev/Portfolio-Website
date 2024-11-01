// components/Skills.tsx

const skills = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "Java", "TypeScript", "SQL", "JavaScript"]
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "Deep Learning", "Computer Vision", "OpenCV", "YOLO", "Graph Neural Networks"]
  },
  {
    category: "Front-end",
    items: ["React", "Next.js", "HTML/CSS", "Flutter", "Tailwind"]
  },
  {
    category: "Back-end",
    items: ["RESTful API", "MySQL", "PostgreSQL", "DynamoDB", "AWS RDS"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Amplify", "Docker", "Git", "CI/CD", "Lambda", "EC2", "S3", "API Gateway", "CloudWatch"]
  },
  {
    category: "Development Tools",
    items: ["Linux", "Postman", "Figma", "Jira", "Confluence", "Jupyter Notebook"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-red-600">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{skillSet.category}</h3>
              <ul className="list-disc list-inside">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-zinc-300 mb-2">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}