import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/about'
import WhyAttend from '@/components/WhyAttend'
import WhoAttend from '@/components/WhoAttend'
import Agenda from '@/components/agenda'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Content sections */}
      <div id="about"><About /></div>
      <WhyAttend />
      <WhoAttend />
      <div id="agenda"><Agenda /></div>
      <div id="packages" className="h-screen"></div>
      <div id="speakers" className="h-screen"></div>
      <div id="events" className="h-screen"></div>
      <div id="awards" className="h-screen"></div>
      <div id="contact" className="h-screen"></div>
      </main>
  )
}
