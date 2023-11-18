import Widget from "./Widget";
import Recommend from "./Recommend";
const Spotify = () => {
	const submission = [
		{
			id: 1,
			url: "6hHhQ8903wgsSovUGjZbGd",
			text: "This song is amazing",
		},
		{
			id: 2,
			url: "0Fkf1np3twDAV9JxkYO1ql",
			text: "This song is sick",
		},
	];
	//state uri submission needs to be passed down to here to utilize for id attribute
	return (
		<div>
			{submission.map((song) => {
				return (
					<>
						<Widget id={song.id} songID={song.url} /> <Recommend text={song.text} />
					</>
				);
			})}
		</div>
	);
};

export default Spotify;
