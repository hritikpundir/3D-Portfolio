import NavBar from "./components/Navbar"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
