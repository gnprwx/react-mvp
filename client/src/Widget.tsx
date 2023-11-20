const Widget = ({ songID }: { songID: string }) => {
	return (
		<iframe
			src={`https://open.spotify.com/embed/track/${songID}`}
			width="100%"
			height="235"
			loading="lazy"
		></iframe>
	);
};

export default Widget;
