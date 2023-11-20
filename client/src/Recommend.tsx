const Recommend = ({ text }: { text: string }) => {
	return (
		<p className="text-lg italic font-semibold text-gray-200 dark:text-white px-2">
			{text}
		</p>
	);
};

export default Recommend;
