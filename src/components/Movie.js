import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";
import React from "react";

function Movie({ id, title, summary, genres, coverImage }) {
	return (
		<div>
			<hr />
			<div className={styles.movie}>
				<div>
					<div>
						<div className={styles.title}>
							<Link to={`/movie/${id}`}>{title}</Link>
						</div>
					</div>
					<div className={styles.summary}>
						{summary.length > 500
							? summary.substring(0, 500) + "..."
							: summary}
					</div>
					<div>
						{genres.map((genre, index) =>
							index < 3 ? (
								<span key={index} className={styles.genre}>
									{genre}
								</span>
							) : null
						)}
					</div>
				</div>
				<img className={styles.cover} src={coverImage} alt={title} />
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	coverImage: PropTypes.string.isRequired,
};

export default Movie;
