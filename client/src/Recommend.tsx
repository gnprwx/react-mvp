import React from "react";
const Recommend = ({ text }) => {
	return (
		<p className="text-lg italic font-semibold text-gray-200 dark:text-white px-2">
			{text}
		</p>
	);
};

export default Recommend;
