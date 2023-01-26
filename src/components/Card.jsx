const Card = ({
	title = null,
	description = null,
	subText = null,
	tagText = null,
	cardImageURL = null,
	featureCard = false,
	cardImagePosition = "left",
	contentPosition = "left",
	className = "",
}) => {
	let containerClasses = "card-container";
	let contentContainerClasses = "card-content-container";

	if (featureCard) {
		containerClasses += " feature-card";
	}

	switch (contentPosition) {
		case "left":
			contentContainerClasses += " content-left";
			break;
		case "right":
			contentContainerClasses += " content-right";
			break;
		case "top":
			contentContainerClasses += " content-top";
			break;
		case "bottom":
			contentContainerClasses += " content-bottom";
			break;
		case "center":
			contentContainerClasses += " content-center";
			break;
		default:
			break;
	}

	switch (cardImagePosition) {
		case "left":
			containerClasses += " img-left";
			break;
		case "right":
			containerClasses += " img-right";
			break;
		case "top":
			containerClasses += " img-top";
			break;
		case "bottom":
			containerClasses += " img-bottom";
			break;
		case "center":
			containerClasses += " ";
			break;
		default:
			break;
	}

	return (
		<section className={containerClasses + " " + className}>
			{cardImageURL && (cardImagePosition === "top" || cardImagePosition === "left") && (
				<section className="card-image">
					<img src={cardImageURL} />
				</section>
			)}
			<section className={contentContainerClasses}>
				{tagText && <p className="tag">{tagText}</p>}
				{title && <h2>{title}</h2>}
				{description && <p className="description">{description}</p>}
				{subText && <p className="sub-text">{subText}</p>}
			</section>
			{cardImageURL && (cardImagePosition === "bottom" || cardImagePosition === "right") && (
				<section className="card-image">
					<img src={cardImageURL} />
				</section>
			)}
		</section>
	);
};

export default Card;
