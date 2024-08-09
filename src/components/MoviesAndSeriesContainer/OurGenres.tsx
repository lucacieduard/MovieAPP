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
    <>
      <h2
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "150%",
        }}
      >
        Our Genres
      </h2>
      <div className={styles.ourGenresContainer}>
        {genres.data &&
          genres.data.genres.map((type) => (
            <span className={styles.genreType} key={type.name}>
              {type.name}
            </span>
          ))}
      </div>
    </>
  );
};

export default OurGenres;
