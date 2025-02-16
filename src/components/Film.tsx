import styles from "./film.module.css";

export const Film = ({ src }: { src: string }) => {
  return (
    <div className={styles.film}>
      <img
        src={src}
        alt="A apartment tower under construction in Long Island City, Jan 2025"
      />
    </div>
  );
};
