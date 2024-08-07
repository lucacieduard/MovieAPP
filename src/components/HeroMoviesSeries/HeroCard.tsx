import { ArrowLongRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import styles from "./HeroMoviesSeries.module.scss";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { MovieType } from "../../types";

type HeroCardProps = {
  active: number;
  id: number;
  movie: MovieType;
};

const HeroCard = ({ active, id, movie }: HeroCardProps) => {
  return (
    id == active && (
      <div className={styles.CardContainer}>
        <img
          src={`${import.meta.env.VITE_BASE_IMG_URL}${movie.backdrop_path}`}
          alt="Movie Poster"
        />
        <div className={styles.CardContent}>
          <h2 className={styles.MovieTitle}>
            {movie.title ? movie.title : movie.name}
          </h2>
          <p className={styles.MovieOverview}>{movie.overview}</p>
          <div className={styles.buttons}>
            <button className={styles.MoreInfo}>
              <ArrowLongRightIcon width={24} height={24} />
              More Details
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
    )
  );
};

export default HeroCard;
