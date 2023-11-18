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
		<div className="grid grid-cols-3 gap-4 p-5">
			{submission.map((song) => {
				return (
					<div>
						<Widget id={song.id} songID={song.url} />{" "}
						<Recommend text={song.text} />
					</div>
				);
			})}
		</div>
	);
};

export default Spotify;
