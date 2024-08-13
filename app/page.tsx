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
        <section id="home" className="min-h-screen flex items-center px-6 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">Hi, Im Michael</h1>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">Software Engineer</h1>
            <p className="text-xl text-gray-400 mb-8">Full-Stack Developer / AI Enthusiast</p>
            <a href="mailto:MichaelElrod.Dev@gmail.com" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Contact Me</a>
          </div>
        </section>

        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </Layout>
  )
}