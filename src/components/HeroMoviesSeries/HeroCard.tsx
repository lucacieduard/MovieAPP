import {
  ArrowLongRightIcon,
  PlayIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import styles from "./HeroMoviesSeries.module.scss";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { MovieType } from "../../types";
import { useNavigate } from "react-router-dom";

type HeroCardProps = {
  movie: MovieType;
  carousel: boolean;
};

const HeroCard = ({ movie, carousel }: HeroCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.CardContainer}>
      <img
        src={`${import.meta.env.VITE_BASE_IMG_URL}${movie.backdrop_path}`}
        alt="Movie Poster"
      />
      <div
        className={styles.CardContent}
        style={carousel ? {} : { bottom: "40px" }}
      >
        <h2 className={styles.MovieTitle}>
          {movie.title ? movie.title : movie.name}
        </h2>
        <p className={styles.MovieOverview}>
          {movie.overview.slice(0, 150)} ...
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.MoreInfo}
            onClick={() => carousel && navigate(`/movies/${movie.id}`)}
          >
            {carousel ? (
              <ArrowLongRightIcon width={24} height={24} />
            ) : (
              <PlayIcon width={20} height={20} />
            )}
            {carousel ? "More Details" : "Play now"}
          </button>
          <div className={styles.actions}>
            <button>
              <PlusIcon width={24} height={24} />
            </button>
            <button>
              <HandThumbUpIcon width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
