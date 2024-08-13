// components/About.tsx
export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-lg mb-4">
                Im currently pursuing my Bachelor of Science in Computer Science from
                Clemson University and will continue for another year to obtain my
                Masters degree. I have a broad range of interests within the
                development field, but I have a strong passion for AI technology and
                machine learning.
              </p>
              <p className="text-lg mb-4">
                When I was younger, I enjoyed developing my skills as a graphic designer,
                but in 2019, I found the inspiration to continue my education and pursue
                a career as a developer in the tech industry.
              </p>
              <p className="text-lg">
                I am eager to begin my professional journey, and I am especially
                interested in roles that will allow me to continue to learn and grow
                while contributing to meaningful and innovative projects.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Technology I havve worked with:</h3>
              <div className="flex flex-wrap">
                {['HTML/CSS', 'RESTful API', 'AWS', 'Python', 'JavaScript', 'Git', 'Java', 'C/C++', 'A.I.', 'Machine Learning', 'Flutter'].map((tech) => (
                  <span key={tech} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }