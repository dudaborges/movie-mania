import starIcon from '../assets/icons/star.svg';
import '../styles/components/popup-movie.css';

interface PopUpMovieProps {
  movie: {
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
  };
  onClose: () => void;
}

const PopUpMovie: React.FC<PopUpMovieProps> = ({ movie, onClose }) => {
  return (
    <div id="popup-movie" className="flex-center flex__gap-50">
      <div className="banner-popup">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="banner"
        />
      </div>
      <div id="content-popup">
        <div className="flex-center">
          <div>
            <img src={starIcon} alt="Avaliações" />
          </div>
          <span>{movie.vote_average}</span>
        </div>
        <div>
          <h1 className="title-main">{movie.title}</h1>
          <p className="paragraph-default">{movie.overview}</p>

          <p className="paragraph-default">
            <span>Data de lançamento:</span> {movie.release_date}
          </p>
        </div>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          <button>Ver Trailer</button>
        </a> */}
        <button onClick={onClose} className="btn-default">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PopUpMovie;

