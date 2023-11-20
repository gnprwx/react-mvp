import Widget from "./Widget";
import Recommend from "./Recommend";
const Spotify = ({ songs }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
			{songs.map((song) => {
				return (
					<div key={song.id}>
						<Widget songID={song.url} />
						<Recommend text={song.text} />
					</div>
				);
			})}
		</div>
	);
};

export default Spotify;
