import Header from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"
import About from "@/components/landing/About"
import Feature from "@/components/landing/Feature"
import Pricing from "@/components/landing/Pricing"
import Footer from "@/components/landing/Footer"

const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}

export default page