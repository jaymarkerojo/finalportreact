      import Home from "./pages/Home/Home"
      import Navbar from "./pages/Navbar/Navbar"
      import Skills from "./pages/Skills/Skills"
      import About from "./pages/About/About"
      import FadeInSection from "./components/FadeInSection/FadeInSection"
      import Project from "./pages/Projects/Project"
      import Contact from "./pages/Contact/Contact"
      
      function App() {

        return (
        <>
        <div className="scroll-smooth">
          <Navbar/>
          <FadeInSection>
          <Home/>
          </FadeInSection>
          <FadeInSection>
          <About/>
          </FadeInSection>
            <FadeInSection>
          <Skills/>
          </FadeInSection>
          <FadeInSection>
            <Project/>
          </FadeInSection>
            <FadeInSection>
              <Contact/>
            </FadeInSection>
          </div>

        </>
        )
      }

      export default App
