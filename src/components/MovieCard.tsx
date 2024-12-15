import '../styles/components/movie-card.css'

interface MovieCardProps {
    srcImg: string;
    title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ srcImg, title }) => {
    return (
    <div className="movie-card">
      <div className='banner-movie img'>
        <img src={srcImg} alt="Banner"/>
      </div>
      <div className='content-movie-card'>
        <h2 className='subtitle-main'>{title}</h2>
        <button className='btn-default'>Saiba Mais</button>
      </div>

    </div>
  )
}

export default MovieCard
