import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import styles from "./HeroMoviesSeries.module.scss";

type HeroControlerProps = {
  activeMovie: number;
  changeMovieHandler: (id: number) => void;
  moviesLen: number;
};

const HeroControler = (props: HeroControlerProps) => {
  const clickHandler = (type: "+" | "-") => {
    if (type == "+") {
      props.changeMovieHandler(props.activeMovie + 1);
    } else {
      props.changeMovieHandler(props.activeMovie - 1);
    }
  };
  return (
    <div className={styles.HeroControleContainer}>
      <button onClick={() => clickHandler("-")}>
        <ArrowLongLeftIcon />
      </button>
      <div className={styles.lines}>
        {Array(props.moviesLen)
          .fill(0)
          .map((_, index) => {
            return (
              <span
                onClick={() => props.changeMovieHandler(index)}
                key={index}
                className={
                  index === props.activeMovie
                    ? `${styles.line} ${styles.active}`
                    : `${styles.line}`
                }
              ></span>
            );
          })}
      </div>
      <button onClick={() => clickHandler("+")}>
        <ArrowLongRightIcon />
      </button>
    </div>
  );
};

export default HeroControler;
