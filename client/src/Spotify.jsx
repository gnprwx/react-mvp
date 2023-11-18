import axios from "axios";
import Widget from "./Widget";
import Recommend from "./Recommend";
import { useCallback, useEffect, useState } from "react";
const Spotify = () => {
	const [songs, setSongs] = useState([]);

	const fetchSongs = useCallback(async () => {
		try {
			const response = await axios.get("/api/songs");
			setSongs(response.data);
		} catch (err) {
			console.error(err);
		}
	});
	useEffect(() => {
		fetchSongs();
	}, [fetchSongs]);

	//state uri submission needs to be passed down to here to utilize for id attribute
	return (
		<div className="grid grid-cols-3 gap-4 p-5">
			{songs.map((song) => {
				return (
					<div key={song.id}>
						<Widget songID={song.url} /> <Recommend text={song.text} />
					</div>
				);
			})}
		</div>
	);
};

export default Spotify;
