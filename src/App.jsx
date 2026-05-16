
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TextArea from "./components/TextArea";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <TextArea/> 
      <Details />
      <FAQ />
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App
