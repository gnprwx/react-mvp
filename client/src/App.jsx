import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p className="text-5xl">Songification</p>
			<div>
				<button className="bg-slate-500 rounded p-3 m-2" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
