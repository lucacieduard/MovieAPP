import { useLayoutEffect, useRef, useState } from "react";
import HeroCard from "./HeroCard";
import HeroControler from "./HeroControler";
import styles from "./HeroMoviesSeries.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { getRandom } from "../../utils/getRandomFromArray";
import { HeroDataType, MovieType } from "../../types";
import Loading from "../Loading/Loading";

const HeroMoviesSeries = () => {
  const [data, loading, error] = useFetch<HeroDataType>(
    "/trending/all/day?language=en-US"
  );
  const [activeMovie, setActiveMovie] = useState(0);
  const [random, setRandom] = useState<MovieType[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const changeMovieHandler = (id: number) => {
    if (id >= random.length) id = 0; // >= movie len
    if (id < 0) id = random.length - 1; // movie len -1
    setActiveMovie(id);
  };

  let oneScroll = 0;
  if (scrollRef.current?.scrollWidth) {
    oneScroll = scrollRef.current?.scrollWidth / random.length;
  }

  scrollRef.current?.scroll(oneScroll * activeMovie, 0);

  useLayoutEffect(() => {
    if (data.data) {
      let randomData: MovieType[] = getRandom<MovieType[]>(
        data.data.results,
        4
      );
      randomData = randomData.filter((movie) => movie.backdrop_path !== null);
      setRandom(randomData as MovieType[]);
    }
  }, [data]);

  if (error) return <div> Error</div>;

  return (
    <div className={styles.HeroContainer}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.CardsContainer} ref={scrollRef}>
            {random.map((movie) => (
              <HeroCard key={movie.id} movie={movie} carousel={true} />
            ))}
          </div>
          <HeroControler
            activeMovie={activeMovie}
            changeMovieHandler={changeMovieHandler}
            moviesLen={random.length}
          />
        </>
      )}
    </div>
  );
};

export default HeroMoviesSeries;
