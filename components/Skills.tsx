// components/Skills.tsx
const skills = [
    {
      category: "Programming Languages",
      items: ["C / C++", "Java", "Python", "JavaScript"]
    },
    {
      category: "Web Technologies",
      items: ["HTML/CSS", "React", "Node.js", "RESTful APIs"]
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "AWS", "Docker", "Linux"]
    }
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{skillSet.category}</h3>
                <ul className="list-disc list-inside">
                  {skillSet.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 mb-2">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }