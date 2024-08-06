import { PlayIcon } from "@heroicons/react/24/solid";
import HeroImg from "../../assets/HeroImg.png";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <img src={HeroImg} alt="Hero" className={styles.HeroImg} />
      <div className={styles.HeroContent}>
        <h1>The Best Streaming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
          <span>
            With StreamVibe, you can enjoy a wide variety of content, including
            the latest blockbusters, classic movies, popular TV shows, and more.
            You can also create your own watchlists, so you can easily find the
            content you want to watch.
          </span>
        </p>
        <button>
          <PlayIcon width={24} height={24} color="white" />
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
