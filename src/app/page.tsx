import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/about'
import WhyAttend from '@/components/WhyAttend'
import WhoAttend from '@/components/WhoAttend'
import Agenda from '@/components/agenda'
import DelegatePackages from '@/components/DelegatePackages'
import CoHostedEvents from '@/components/CoHostedEvents'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

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
      <DelegatePackages />
      <CoHostedEvents />
      <Gallery />
      <Footer />
      </main>
  )
}
