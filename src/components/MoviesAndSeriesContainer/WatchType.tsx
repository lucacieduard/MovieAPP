import { getConfig } from "../../utils/getConfigSection";
import styles from "./MoviesSeriesContainer.module.scss";
import SectionCategory from "./SectionCategory";

type WatchTypeProps = {
  wType: "movies" | "series";
  myType: "movies" | "series";
};

const WatchType = ({ wType, myType }: WatchTypeProps) => {
  const config = getConfig(myType);

  return (
    <div
      className={
        wType !== myType
          ? `${styles.hideWatchTypeMobile} ${styles.watchTypeContainer}`
          : styles.watchTypeContainer
      }
    >
      <span className={styles.ticket}>
        {myType == "movies" ? "Movies" : "Series"}
      </span>
      {Object.keys(config).map((category_type: string, index: number) => (
        <SectionCategory
          key={index}
          sectionType={myType}
          category_type={
            category_type as
              | "genres"
              | "trending_now"
              | "new_releases"
              | "must_watch"
          }
          config={config}
        />
      ))}
    </div>
  );
};

export default WatchType;
