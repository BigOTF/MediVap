import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Feature from "./components/Features/Feature"
import Client from "./components/ClientSec/Client"

function App() {
  
  return (
    <div className="pb-[1000px]">
      <Header />
      <Hero />
      <About />
      <Feature />
      <Client />
    </div>
  )
}

export default App
