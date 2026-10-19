import "./App.css";
import Metro from "./Components/Metro";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Problema from "./Components/Problema";
import Vantaggi from "./Components/Vantaggi";
import Metodo from "./Components/Metodo";
import Caso from "./Components/Caso";
import Garanzie from "./Components/Garanzie";
import Pacchetti from "./Components/Pacchetti";
import ChiSono from "./Components/ChiSono";
import Faq from "./Components/Faq";
import Contatto from "./Components/Contatto";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Metro />
      <Navbar />
      <main id="top">
        <Hero />

        <Problema />
        <Vantaggi />
        <Metodo />
        <Caso />
        <Garanzie />
        <Pacchetti />
        <ChiSono />
        <Faq />
        <Contatto />
      </main>
      <Footer />
    </>
  );
}
