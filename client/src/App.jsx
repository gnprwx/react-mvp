import Form from "./Form";
import Spotify from "./Spotify";
import { useState } from "react";

function App() {
	const formSubmission = () => {
		//send db info
	};
	return (
		<>
			<p className="bg-slate-700 text-slate-200 text-5xl text-center p-5">
				Songification
			</p>
			<Form formSubmission={formSubmission}/>
			<Spotify/>
		</>
	);
}

export default App;
