// components/About.tsx
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
            <p className="text-lg mb-4">
              I recently graduated from Clemson University with a Bachelor's in Computer 
              Science, and I'm currently pursuing my Master's at the same institution.
              During my undergraduate years, I focused primarily on designing, developing,
              and deploying scalable cloud-based applications. Towards the end of my
              undergraduate studies and into my graduate work, I've developed a strong
              interest in Artificial Intelligence, particularly Machine Learning.
            </p>
            <p className="text-lg mb-4">
              My passion lies in exploring innovative ways to integrate modern machine
              learning techniques to enhance user experiences in both mobile and web-based
              applications. I'm excited to apply and expand my skills in a professional
              setting, and I'm particularly interested in roles that offer opportunities
              for continuous learning and growth while contributing to meaningful and
              cutting-edge projects.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-128 h-128 border-4 border-blue-400">
              <Image
                src="/images/my-headshot.png"
                alt="Michael Elrod"
                width={350}
                height={350}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}