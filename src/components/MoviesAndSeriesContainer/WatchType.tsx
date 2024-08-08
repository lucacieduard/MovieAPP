import { sections } from "../../utils/config";
import styles from "./MoviesSeriesContainer.module.scss";
import WatchSection from "./WatchSection";

type WatchTypeProps = {
  wType: "movies" | "series";
  myType: "movies" | "series";
};

const WatchType = ({ wType, myType }: WatchTypeProps) => {
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
      {Object.keys(sections).map((section_type: string, index: number) => (
        <WatchSection
          key={index}
          section={sections[section_type]}
          sectionType={myType}
        />
      ))}
    </div>
  );
};

export default WatchType;
