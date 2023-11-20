import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Spotify from "./Spotify";
import Error from "./Error";
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

	const handleFormSubmission = async (e) => {
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

	const handleOnError = () => {
		setErr(false);
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
		<div className="min-h-[100dvh] mx-auto bg-indigo-950/70">
			<Error handleOnError={handleOnError} error={err}>
				<p>This song has already been submitted. Try a different one.</p>
			</Error>
			<div className="grid grid-cols-1 2xl:grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 px-10 py-5 bg-indigo-900 items-center border-b-2 border-indigo-500 shadow-lg shadow-indigo-500/40">
				<img src={logo} alt="logo" className="w-96" />
				<Form
					onClickSubmission={handleFormSubmission}
					urlValue={urlValue}
					textValue={textValue}
					handleTextInputChange={handleTextInputChange}
					handleUrlInputChange={handleUrlInputChange}
				/>
				<p className="text-xl italic font-semibold text-gray-900 dark:text-white">
					Discover 20 random songs by users like you!
				</p>
			</div>
			<div className="pt-10 mx-10 max-w-7xl mx-auto">
				<Spotify songs={songs} />
			</div>
		</div>
	);
}

export default App;
