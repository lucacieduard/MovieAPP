import styles from "./MoviesSeriesContainer.module.scss";
import { useFetch } from "../../hooks/useFetch";

type OurGenresProps = {
  sectionType: "movies" | "series";
};
type DataT = {
  genres: { id: number; name: string }[];
};

const OurGenres = ({ sectionType }: OurGenresProps) => {
  const [genres, loading, error] = useFetch<DataT>(
    `/genre/${sectionType === "movies" ? "movie" : "tv"}/list`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Errorr...</div>;

  return (
    <div className={styles.ourGenresContainer}>
      {genres.data &&
        genres.data.genres.map((type) => (
          <span className={styles.genreType}>{type.name}</span>
        ))}
    </div>
  );
};

export default OurGenres;
