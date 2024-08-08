import { useFetch } from "../../hooks/useFetch";
import { MovieType } from "../../types";
import MovieTvCard from "../MovieTvCard/MovieTvCard";
import styles from "./MoviesSeriesContainer.module.scss";

type TrendingNowProps = {
  sectionType: "movies" | "series";
};

type DType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

const TrendingNow = ({ sectionType }: TrendingNowProps) => {
  const [movies, loading, error] = useFetch<DType>(
    `/trending/${sectionType === "movies" ? "movie" : "tv"}/day?language=en-US`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className={styles.TrendingCardsContainer}>
      {movies.data.results.map((movie) => (
        <MovieTvCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default TrendingNow;
