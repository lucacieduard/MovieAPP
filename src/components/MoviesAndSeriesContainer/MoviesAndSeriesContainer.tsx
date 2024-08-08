import WatchType from "./WatchType";
import WatchTypeControler from "./WatchTypeControler";
import styles from "./MoviesSeriesContainer.module.scss";
import { useState } from "react";

const MoviesAndSeriesContainer = () => {
  const [watchType, setWatchType] = useState<"movies" | "series">("movies");
  const changeWatchType = (type: "movies" | "series") => setWatchType(type);

  return (
    <div className={styles.container}>
      <WatchTypeControler changeType={changeWatchType} wType={watchType} />
      <WatchType wType={watchType} myType="movies" />
      <WatchType wType={watchType} myType="series" />
    </div>
  );
};

export default MoviesAndSeriesContainer;
