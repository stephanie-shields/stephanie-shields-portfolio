import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Capabilities from './components/Capabilities'
import GithubProjects from './components/GithubProjects'
import TechStack from './components/TechStack'

function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <GithubProjects />
      <TechStack />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<main className="container py-16"><h1>About</h1></main>} />
        <Route path="/work" element={<main className="container py-16"><h1>Work</h1></main>} />
        <Route path="/approach" element={<main className="container py-16"><h1>Approach</h1></main>} />
        <Route path="/toolbox" element={<main className="container py-16"><h1>Toolbox</h1></main>} />
      </Routes>
    </BrowserRouter>
  )
}
