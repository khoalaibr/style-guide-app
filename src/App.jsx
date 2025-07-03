import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import StyleGuidePage from './pages/StyleGuidePage'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/style-guide" element={<StyleGuidePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

