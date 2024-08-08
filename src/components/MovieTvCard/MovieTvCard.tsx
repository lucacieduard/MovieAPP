import { ArrowUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { MovieType } from "../../types";
import styles from "./MovieTvCard.module.scss";

type MovieTvCardProps = {
  movie: MovieType;
};

const MovieTvCard = ({ movie }: MovieTvCardProps) => {
  return (
    <div className={styles.CardContainer}>
      <img src={`${import.meta.env.VITE_BASE_IMG_URL}${movie.poster_path}`} />
      <div className={styles.CardInfo}>
        <span>
          <StarIcon />
          {movie.vote_average.toFixed(2)}
        </span>
        <span>
          <ArrowUpIcon />
          {movie.popularity.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default MovieTvCard;
