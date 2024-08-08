import styles from "./MoviesSeriesContainer.module.scss";

type WatchTypeControler = {
  changeType: (type: "movies" | "series") => void;
  wType: "movies" | "series";
};

const WatchTypeControler = ({ changeType, wType }: WatchTypeControler) => {
  return (
    <div className={styles.controlerContainer}>
      <button
        onClick={() => changeType("movies")}
        className={wType === "movies" ? styles.active : ""}
      >
        Movies
      </button>
      <button
        className={wType === "series" ? styles.active : ""}
        onClick={() => changeType("series")}
      >
        Series
      </button>
    </div>
  );
};

export default WatchTypeControler;
