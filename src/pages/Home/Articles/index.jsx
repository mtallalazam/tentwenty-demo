import { useEffect, useState } from "react";

import Card from "../../../components/Card";

import "./Articles.scss";

const Articles = () => {
	const [featureArticle, setFeatureArticle] = useState(null);
	const [articlesList, setArticlesList] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchDataOnMount = async () => {
		setLoading(true);

		setTimeout(async () => {
			try {
				const response = await fetch("../../../db/articles.json");
				const data = await response.json();

				const featureArticle = data[0];
				const restArticles = data.slice(1);

				setFeatureArticle(featureArticle);
				setArticlesList(restArticles);
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
				<h3>Other Articles</h3>
			</section>

			{loading ? (
				<p>Loading...</p>
			) : (
				<section className="col-12">
					<Card
						featureCard
						title={featureArticle.title}
						description={featureArticle.description}
						tagText={featureArticle.catagory}
						cardImageURL={featureArticle.img}
						subText={featureArticle.author}
						cardImagePosition="left"
					/>

					<section className="row">
						{articlesList.map((article) => (
							<section
								key={article.id}
								className="col-12 md-col-6 lg-col-4"
							>
								<Card
									cardImagePosition="left"
									title={article.title}
									description={article.description}
									tagText={article.catagory}
									cardImageURL={article.img}
									subText={article.author}
								/>
							</section>
						))}
					</section>
				</section>
			)}
		</section>
	);
};

export default Articles;
