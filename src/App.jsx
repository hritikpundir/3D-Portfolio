import NavBar from "./components/Navbar"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <Experience />
      <TechStack />
    </main>
  )
}

export default App
