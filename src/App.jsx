import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import * as Sentry from '@sentry/react'
const App = () => {
  return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <HowItWorks/>
    <Footer/>
   </main>
  );
}

export default Sentry.withProfiler(App)
