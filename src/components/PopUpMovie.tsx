import starIcon from '../assets/icons/star.svg';
import '../styles/components/popup-movie.css';

interface PopUpMovieProps {
  movie: {
    id: number;
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
        <div className="flex-center flex__gap-5">
          <img src={starIcon} alt="Avaliações" />
          <span>{movie.vote_average}</span>
        </div>
        <div>
          <h1 className="title-main">{movie.title}</h1>
          <p className="paragraph-default">{movie.overview}</p>

          <p className="paragraph-default">
            <span>Data de lançamento:</span> {movie.release_date}
          </p>
          <span className='id-movie'>id: {movie.id}</span>

        </div>
        <button onClick={onClose} className="btn-default">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PopUpMovie;

