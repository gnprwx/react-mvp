import Form from "./Form";
import Spotify from "./Spotify";
import { useState } from "react";

function App() {
	const formSubmission = (e) => {
		e.preventDefault();
		console.log(e.target[0].value); //spotify url
		console.log(e.target[1].value); //recommend text
		//send db info
	};
	return (
		<div className="min-h-screen bg-slate-900">
			<p className="bg-slate-700 text-slate-200 text-5xl text-center p-5">
				Songification
			</p>
			<Form formSubmission={formSubmission} />
			<Spotify />
		</div>
	);
}

export default App;
