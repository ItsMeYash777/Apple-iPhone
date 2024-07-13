import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"


const Highlights = () => {
    useGSAP(()=>{
        gsap.to('#title',{opacity:1, y:0})
        gsap.to('.link', {opacity:1, y:0, duration:1, stagger:0.25})
        
    }, [])
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-zinc h-full"
    >
      <div className="screen-max-width">
        <div className="w-full justify-between items-end mb-12 md:flex">
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap gap-5  items-end">
            <p className="link">
              Watch the Film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the Events
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
}

export default Highlights
