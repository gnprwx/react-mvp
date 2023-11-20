import React from "react";
const Widget = ({ songID }) => {
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
