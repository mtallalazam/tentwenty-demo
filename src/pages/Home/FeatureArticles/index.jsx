import { useEffect, useState } from "react";

import Card from "../../../components/Card";

import "./FeatureArticles.scss";

const FeatureArticles = () => {
	const [featureArticle, setFeatureArticle] = useState(null);
	const [articlesList, setArticlesList] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchDataOnMount = async () => {
		setLoading(true);

		setTimeout(async () => {
			try {
				const response = await fetch("../../../../db/featureArticles.json");
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
		<section className="row feature-articles-container">
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<section className="col-12 lg-col-6">
						<Card
							featureCard
							contentPosition="center"
							title={featureArticle.title}
							description={featureArticle.description}
							tagText={featureArticle.catagory}
							cardImageURL={featureArticle.img}
							subText={featureArticle.author}
							cardImagePosition="bottom"
						/>
					</section>

					<section className="col-12 lg-col-6 masonry">
						{articlesList.map((article) => (
							<Card
								cardImagePosition="top"
								key={article.id}
								title={article.title}
								description={article.description}
								tagText={article.catagory}
								cardImageURL={article.img}
								subText={article.author}
							/>
						))}
					</section>
				</>
			)}
		</section>
	);
};

export default FeatureArticles;
