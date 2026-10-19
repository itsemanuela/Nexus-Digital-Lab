import "./App.css";
import Metro from "./components/Metro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Vantaggi from "./components/Vantaggi";
import Metodo from "./components/Metodo";
import Caso from "./components/Caso";
import Garanzie from "./components/Garanzie";
import Pacchetti from "./components/Pacchetti";
import ChiSono from "./components/ChiSono";
import Faq from "./components/Faq";
import Contatto from "./components/Contatto";
import Footer from "./components/Footer";

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
