import {
  ArrowUpIcon,
  CalendarDaysIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { MovieType } from "../../types";
import styles from "./MovieTvCard.module.scss";

type MovieTvCardProps = {
  movie: MovieType;
  sectionType: "movies" | "series";
  category_type: "genres" | "trending_now" | "new_releases" | "must_watch";
};

const MovieTvCard = ({
  movie,
  category_type,
  sectionType,
}: MovieTvCardProps) => {
  return (
    <div className={styles.CardContainer}>
      <img src={`${import.meta.env.VITE_BASE_IMG_URL}${movie.poster_path}`} />
      <div className={styles.CardInfo}>
        {(category_type === "trending_now" ||
          category_type === "new_releases") && (
          <>
            <span>
              <StarIcon />
              {movie.vote_average.toFixed(2)}
            </span>
            <span>
              <ArrowUpIcon />
              {movie.popularity.toFixed(2)}
            </span>
          </>
        )}
        {category_type === "must_watch" && (
          <>
            <span>
              <CalendarDaysIcon />{" "}
              {sectionType === "movies"
                ? movie.release_date
                : movie.first_air_date}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieTvCard;
