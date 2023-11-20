import Widget from "./Widget";
import Recommend from "./Recommend";
type Song = {
	id: number,
	url: string,
	text: string
}
const Spotify = ({ songs }: { songs: Song[] }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 pb-2">
			{songs.map((song: Song) => {
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
