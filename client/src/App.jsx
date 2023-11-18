import axios from "axios";
import Form from "./Form";
import Spotify from "./Spotify";
import Directions from "./Directions";
import { useEffect, useState } from "react";

function App() {
	const [songs, setSongs] = useState([]);
	const [err, setErr] = useState(false);
	const [urlValue, setUrlValue] = useState("");
	const [textValue, setTextValue] = useState("");

	const handleUrlInputChange = (e) => {
		setUrlValue(e.target.value);
	};

	const handleTextInputChange = (e) => {
		setTextValue(e.target.value);
	};

	const formSubmission = async (e) => {
		e.preventDefault();
		let url = urlValue.slice(31, 53);
		let text = textValue;
		try {
			await axios.post("api/songs", { url, text });
			fetchSongs();
			setUrlValue("");
			setTextValue("");
			setErr(false);
		} catch (error) {
			setErr(true);
		}
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

	const handleOnError = () => {
		setErr(false);
	};

	return (
		<div className="min-h-[100dvh] bg-slate-900">
			<p className="bg-slate-700 text-slate-200 text-5xl text-center p-5">
				Songification
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-5 bg-slate-400 rounded-xl mx-10 mt-5">
				<Form
					onClickSubmission={formSubmission}
					error={err}
					handleOnError={handleOnError}
					urlValue={urlValue}
					textValue={textValue}
					handleTextInputChange={handleTextInputChange}
					handleUrlInputChange={handleUrlInputChange}
				/>
				<Directions />
			</div>
			<Spotify songs={songs} />
		</div>
	);
}

export default App;
