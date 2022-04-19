import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
   return <div className={styles.top_container}>
    <div className={styles.container}>
      <img src={coverImg} alt={title} className={styles.title_img}/>
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`} className={styles.title_link}>{title}</Link>
      </h2>
    </div>
    <div className={styles.container_explain}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Genres : </li>
        {genres.map(g => (
          <li key={g} className={styles.listItem}>{g}</li>
          ))}
      </ul>
    </div>
  </div>
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;