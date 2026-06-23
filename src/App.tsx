import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Expertise from './components/Expertise/Expertise'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/main.scss'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
