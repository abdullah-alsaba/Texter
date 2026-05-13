// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero/>
      <Details />
      <FAQ />
      <Footer/>
    </>
  );
}

export default App
