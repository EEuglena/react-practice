import { useState, useEffect } from "react";
import React from "react";
import styles from "./Home.module.css";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const response = await fetch(
			"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Movie Archive</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
							coverImage={movie.medium_cover_image}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
