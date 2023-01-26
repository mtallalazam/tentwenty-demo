import { useEffect, useState } from "react";

import Card from "../../../components/Card";

import "./InvertedArticles.scss";

const InvertedArticles = () => {
	const [articlesList, setArticlesList] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchDataOnMount = async () => {
		setLoading(true);

		setTimeout(async () => {
			try {
				const response = await fetch("../../../db/invertedArticles.json");
				const data = await response.json();

				setArticlesList(data);
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		}, 2000);
	};

	useEffect(() => {
		fetchDataOnMount();
	}, []);
	return (
		<section className="row articles-container">
			<section className="banner">
				<h3>Inverted Articles</h3>
			</section>

			{loading ? (
				<p>Loading...</p>
			) : (
				articlesList.map((article) => (
					<section
						key={article.id}
						className="col-12 md-col-4"
					>
						<Card
							contentPosition="center"
							cardImagePosition={article.imgPosition}
							title={article.title}
							tagText={article.catagory}
							cardImageURL={article.img}
							subText={article.author}
						/>
					</section>
				))
			)}
		</section>
	);
};

export default InvertedArticles;
