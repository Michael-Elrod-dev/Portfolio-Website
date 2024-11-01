// page.tsx
import Layout from '../components/Layout'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex w-full">
              <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                <h1 className="text-7xl font-bold mb-4">
                  Hi, Im Michael
                </h1>
                <h1 className="text-7xl font-bold mb-4">
                  Software Engineer
                </h1>
                <p className="text-lg sm:text-xl text-zinc-300 mb-8">
                  Full-Stack Developer / Cloud Architect / AI Enthusiast
                  </p>
                <div className="space-y-4">
                  <a 
                    href="mailto:MichaelElrod.Dev@gmail.com" 
                    className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition duration-300 min-w-[140px] text-center whitespace-nowrap"
                  >
                    Contact Me
                  </a>
                  <br />
                  <a 
                    href="/images/my-resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-600 transition duration-300 min-w-[140px] text-center whitespace-nowrap"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="hidden md:flex md:w-1/4 lg:w-1/3 xl:w-1/2 items-center justify-center">
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
    </Layout>
  )
}