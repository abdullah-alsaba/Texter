// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Details />
      <FAQ />
      <Footer/>
    </>
  );
}

export default App
