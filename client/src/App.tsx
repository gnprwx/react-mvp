import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Spotify from "./Spotify";
import Error from "./Error";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import logo from "./assets/logo.png";

function App() {
	const [songs, setSongs] = useState([]);
	const [err, setErr] = useState(false);
	const [urlValue, setUrlValue] = useState("");
	const [textValue, setTextValue] = useState("");

	const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
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

	const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrlValue(e.target.value);
	};

	const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextValue(e.target.value);
	};

	const handleOnError = () => {
		setErr(false);
	};

	const fetchSongs = async () => {
		try {
			const response = await axios.get("api/songs");
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
			<Header>
				<img src={logo} alt="logo" className="w-96" />
				<Form
					onClickSubmission={handleFormSubmission}
					urlValue={urlValue}
					textValue={textValue}
					handleTextInputChange={handleTextInputChange}
					handleUrlInputChange={handleUrlInputChange}
				/>
			</Header>
			<Body>
				{songs.length !== 0 ? <Spotify songs={songs} /> : <p className="pb-8 font-bold leading-none text-center text-2xl rounded-full animate-pulse text-indigo-100">LOADING...</p>}
			</Body>
			<Footer>
				~/p
			</Footer>
		</div>
	);
}

export default App;
