import Error from "./Error";
const Form = ({
	onClickSubmission,
	error,
	handleOnError,
	urlValue,
	textValue,
	handleUrlInputChange,
	handleTextInputChange,
}) => {
	return (
		<div className="mx-auto sm:w-1/2 bg-slate-500/40 shadow-2xl border-2 border-slate-900/30 rounded p-5">
			<form
				className="mx-auto lg:w-96 flex flex-col"
				onSubmit={onClickSubmission}
			>
				<label
					className="block mb-1 text-white after:content-['*'] after:ml-0.5 after:text-red-400"
					htmlFor="spotify"
				>
					spotify url:
				</label>
				<input
					className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded bg-gray-900/60 border-gray-600 placeholder-gray-300 text-white mb-2"
          placeholder="https://open.spotify.com/track/1F7wq8a3kwwRH2TiHB0I42?si=6e13e41242704a35"
					type="text"
					name="spotify"
					id="spotify"
					pattern="https:\/\/open\.spotify\.com\/track\/[A-Za-z0-9]+\?si=([A-Za-z0-9]+)"
					onChange={handleUrlInputChange}
					value={urlValue}
					required
				/>
				<label
					className="block mb-1 text-white after:content-['*'] after:ml-0.5 after:text-red-400"
					htmlFor="recommendation"
				>
					describe song:
				</label>
				<textarea
					className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded bg-gray-900/60 border-gray-600 placeholder-gray-300 text-white"
					placeholder="This song is dark and moody..."
					name="recommendation"
					id="recommendation"
					cols="30"
					rows="3"
					maxLength={80}
					onChange={handleTextInputChange}
					value={textValue}
					required
					style={{ resize: "none" }}
				/>
				<button
					className="mx-auto sm:w-1/3 bg-slate-700 text-slate-300 font-bold shadow-lg rounded mt-2 p-1"
					type="submit"
				>
					Submit Song
				</button>
				<Error error={error} handleOnError={handleOnError} />
			</form>
		</div>
	);
};

export default Form;
