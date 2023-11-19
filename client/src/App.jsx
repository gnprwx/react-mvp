import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Spotify from "./Spotify";
import bgImage from "./assets/bg.png";
import songBG from "./assets/song-bg.png";
import logo from "./assets/logo.png";

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
		<div className="min-h-[100dvh]">
			<img src={logo} alt="logo" className="w-96 mx-auto m-2" />
			<div
				className="gap-10 px-10 py-10 rounded-xl mx-10 mt-2"
				style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
			>
				<Form
					onClickSubmission={formSubmission}
					error={err}
					handleOnError={handleOnError}
					urlValue={urlValue}
					textValue={textValue}
					handleTextInputChange={handleTextInputChange}
					handleUrlInputChange={handleUrlInputChange}
				/>
			</div>
			<div
				className="gap-10 px-10 py-10 rounded-xl mx-10 mt-5"
				style={{ backgroundImage: `url(${songBG})`, backgroundSize: "cover" }}
			>
				<Spotify songs={songs} />
			</div>
		</div>
	);
}

export default App;
