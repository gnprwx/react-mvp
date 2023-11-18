const Widget = ({ songID }) => {
	return (
		<iframe
			src={`https://open.spotify.com/embed/track/${songID}?utm_source=generator`}
			width="100%"
			height="352"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	);
};

export default Widget;
