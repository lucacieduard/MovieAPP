import styles from "./MoviesSeriesContainer.module.scss";

type SectionControlerProps = {
  title: string;
  sectionType: "movies" | "series";
};

const SectionControler = ({ title, sectionType }: SectionControlerProps) => {
  return (
    <div className={styles.SectionControlerContainer}>
      <h2 className={styles.SectionTitle}>{title}</h2>
    </div>
  );
};

export default SectionControler;
