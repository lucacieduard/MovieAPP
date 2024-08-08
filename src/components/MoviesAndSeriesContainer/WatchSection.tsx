import SectionControler from "./SectionControler";
import { SectionType } from "../../types";
import styles from "./MoviesSeriesContainer.module.scss";
import OurGenres from "./OurGenres";
import TrendingNow from "./TrendingNow";
import NewReleases from "./newReleases";
import MustWatch from "./MustWatch";

type WatchSectionProps = {
  section: SectionType;
  sectionType: "movies" | "series";
};

const WatchSection = ({ section, sectionType }: WatchSectionProps) => {
  const renderComponent = (componentType: string) => {
    switch (componentType) {
      case "genres":
        return <OurGenres sectionType={sectionType} />;
      case "trending_now":
        return <TrendingNow sectionType={sectionType} />;
      case "new_releases":
        return <NewReleases />;
      case "must_watch":
        return <MustWatch />;
      default:
        break;
    }
  };

  return (
    <div className={styles.SectionContainer}>
      <SectionControler title={section.title} sectionType={sectionType} />
      {renderComponent(section.section)}
    </div>
  );
};

export default WatchSection;
