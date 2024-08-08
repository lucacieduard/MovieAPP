import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import styles from "./MoviesSeriesContainer.module.scss";

type SectionControlerProps = {
  title: string;
  sectionType: "movies" | "series";
  moveSlider: (type: "right" | "left") => void;
  percentage: number;
};

const SectionControler = ({
  title,
  moveSlider,
  percentage,
}: SectionControlerProps) => {
  return (
    <div className={styles.SectionControlerContainer}>
      <h2 className={styles.SectionTitle}>{title}</h2>
      <div className={styles.SlideControler}>
        <button onClick={() => moveSlider("left")}>
          <ArrowLeftIcon />
        </button>
        <span className={styles.line}>
          <div
            style={{
              width: percentage,
            }}
          ></div>
        </span>
        <button onClick={() => moveSlider("right")}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default SectionControler;
