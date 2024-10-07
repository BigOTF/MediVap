import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Feature from "./components/Features/Feature"
import Client from "./components/ClientSec/Client"
import Blog from "./components/Blog/Blog"
import JoinUs from "./components/Join/JoinUs"
import NewsLetter from "./components/NewsLetter/NewsLetter"

function App() {
  
  return (
    <div className="pb-[600px]">
      <Header />
      <Hero />
      <About />
      <Feature />
      <Client />
      <Blog />
      <JoinUs />
      <NewsLetter />
    </div>
  )
}

export default App
