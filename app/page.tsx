// pages/index.tsx
import Head from 'next/head'
import Layout from '../components/Layout'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Michael Elrod - Software Engineer</title>
        <meta name="description" content="Michael Elrod's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex w-full">
              <div className="w-1/2">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">Hi, Im Michael</h1>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">Software Engineer</h1>
                <p className="text-xl text-gray-400 mb-8">Full-Stack Developer / Cloud Architect / AI Enthusiast</p>
                <div className="space-y-4">
                  <a href="mailto:MichaelElrod.Dev@gmail.com" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Contact Me</a>
                  <br />
                  <a href="/images/my-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Resume</a>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </Layout>
  )
}