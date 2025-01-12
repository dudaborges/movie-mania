import video from "../assets/videos/cinema.mp4"
import '../styles/sections/home.css'
import Catalog from "./Catalog"

function Home() {
  return (
    <div>
      <section 
      id="home-section" 
      className="flex-center flex-column padding-100 video-background">
      <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o vídeo.
      </video>
      <h1 className="title-main text-white padding-50">Explore o Universo do Cinema com a Gente</h1>
      </section>
      <Catalog/>
    </div>

  )
}

export default Home
