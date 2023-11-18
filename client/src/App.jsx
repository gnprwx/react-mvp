import axios from "axios";
import Form from "./Form";
import Spotify from "./Spotify";
import Directions from "./Directions";
import { useEffect, useState } from "react";

function App() {
	const [songs, setSongs] = useState([]);
	const formSubmission = async (e) => {
		e.preventDefault();
		let url = e.target[0].value.slice(31, 53); //fixed 22 char UUID
		let text = e.target[1].value;
		await axios.post("api/songs", { url, text });
		fetchSongs();
		url = "";
		text = "";
	};

	const fetchSongs = async () => {
		try {
			const response = await axios.get("/api/songs");
			setSongs(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchSongs();
	}, []);

	return (
		<div className="min-h-[100dvh] bg-slate-900">
			<p className="bg-slate-700 text-slate-200 text-5xl text-center p-5">
				Songification
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 py-5 bg-slate-400 rounded-xl mx-10 mt-5">
				<Form onClickSubmission={formSubmission} />
        <Directions />
			</div>
			<Spotify songs={songs} />
		</div>
	);
}

export default App;
