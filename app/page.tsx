import Splash from '@/components/Splash'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Splash />
      <div className="page-content">
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
