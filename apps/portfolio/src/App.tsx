import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'

function HomePage() {
  return (
    <main>
      <Hero />
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
        <Route path="/capabilities" element={<main className="container py-16"><h1>Capabilities</h1></main>} />
        <Route path="/process" element={<main className="container py-16"><h1>Process</h1></main>} />
      </Routes>
    </BrowserRouter>
  )
}
