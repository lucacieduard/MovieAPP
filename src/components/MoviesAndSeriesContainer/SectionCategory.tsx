import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { MovieType, SectionsType } from "../../types";
import MovieTvCard from "../MovieTvCard/MovieTvCard";
import styles from "./MoviesSeriesContainer.module.scss";
import SectionControler from "./SectionControler";

type SectionCategoryProps = {
  sectionType: "movies" | "series";
  category_type: "genres" | "trending_now" | "new_releases" | "must_watch";
  config: SectionsType;
};

type DType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

const SectionCategory = ({
  sectionType,
  category_type,
  config,
}: SectionCategoryProps) => {
  const [movies, loading, error] = useFetch<DType>(
    config[
      category_type as "genres" | "trending_now" | "new_releases" | "must_watch"
    ].url
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolLevel, setScrolLevel] = useState(0);
  const [percentage, setPercentage] = useState(0);
  if (scrollRef.current) scrollRef.current.scrollLeft = scrolLevel;

  const moveSlider = (type: "left" | "right") => {
    setScrolLevel((prev) => {
      if (scrollRef.current?.scrollWidth && scrollRef.current?.clientWidth) {
        const maxScrollLevel =
          scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth;
        if (type == "left" && scrolLevel > 0) {
          return prev - 500;
        } else if (type === "right" && scrolLevel < maxScrollLevel) {
          return prev + 500;
        } else {
          return prev;
        }
      } else {
        return prev;
      }
    });
  };

  useEffect(() => {
    setPercentage((prev) => {
      if (scrollRef.current?.scrollWidth && scrollRef.current?.clientWidth) {
        const maxScrollLevel =
          scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth;
        const percentage = (100 * scrolLevel) / maxScrollLevel;
        return percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;
      }
      return prev;
    });
  }, [scrolLevel]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className={styles.SectionContainer}>
      <SectionControler
        title={config[category_type].title}
        sectionType={sectionType}
        moveSlider={moveSlider}
        percentage={percentage}
      />

      <div className={styles.TrendingCardsContainer} ref={scrollRef}>
        {movies.data.results.map((movie) => (
          <MovieTvCard
            movie={movie}
            key={movie.id}
            category_type={category_type}
            sectionType={sectionType}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCategory;
