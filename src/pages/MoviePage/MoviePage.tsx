import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import HeroCard from "../../components/HeroMoviesSeries/HeroCard";
import { MovieType } from "../../types";
import HeroStyles from "../../components/HeroMoviesSeries/HeroMoviesSeries.module.scss";
import Loading from "../../components/Loading/Loading";

const MoviePage = () => {
  const { id } = useParams();
  const [data, loading, error] = useFetch<MovieType>(`/movie/${id}`);

  if (error) return <div>Loading</div>;
  return (
    <>
      <div className={HeroStyles.HeroContainer}>
        {loading ? (
          <Loading />
        ) : (
          <div className={HeroStyles.CardsContainer}>
            <HeroCard movie={data.data} carousel={false} />{" "}
          </div>
        )}
      </div>
      
    </>
  );
};

export default MoviePage;
