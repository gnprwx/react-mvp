import { useState } from "react";

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
