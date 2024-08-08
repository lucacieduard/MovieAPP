import { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import HeroControler from "./HeroControler";
import styles from "./HeroMoviesSeries.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { getRandom } from "../../utils/getRandomFromArray";
import { HeroDataType, MovieType } from "../../types";

const HeroMoviesSeries = () => {
  const [data, loading, error] = useFetch<HeroDataType>(
    "/trending/all/day?language=en-US"
  );
  const [activeMovie, setActiveMovie] = useState(0);
  const [random, setRandom] = useState<MovieType[]>([]);

  const changeMovieHandler = (id: number) => {
    if (id >= random.length) id = 0; // >= movie len
    if (id < 0) id = random.length - 1; // movie len -1
    setActiveMovie(id);
  };

  useEffect(() => {
    if (data.data) {
      const randomData = getRandom(data.data.results, 4);
      setRandom(randomData as MovieType[]);
    }
  }, [data]);

  if (loading) return <div>Loading</div>;
  if (error) return <div> Error</div>;

  return (
    <div className={styles.HeroContainer}>
      {random.map((movie, index) => (
        <HeroCard key={index} id={index} active={activeMovie} movie={movie} />
      ))}
      <HeroControler
        activeMovie={activeMovie}
        changeMovieHandler={changeMovieHandler}
        moviesLen={random.length}
      />
    </div>
  );
};

export default HeroMoviesSeries;
