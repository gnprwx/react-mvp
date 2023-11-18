import Form from "./Form";
import Spotify from "./Spotify";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [songs, setSongs] = useState([]);
	const formSubmission = async (e) => {
		e.preventDefault();
		let url = e.target[0].value;
		let text = e.target[1].value;
		await axios.post("api/songs", { url, text });
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
	}, [formSubmission]);

	return (
		<div className="min-h-screen bg-slate-900">
			<p className="bg-slate-700 text-slate-200 text-5xl text-center p-5">
				Songification
			</p>
			<Form onClickSubmission={formSubmission} />
			<Spotify songs={songs} />
		</div>
	);
}

export default App;
