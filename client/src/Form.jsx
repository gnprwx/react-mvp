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
		<div>
			<form
				className="mx-auto lg:w-full flex flex-col sm:w-3/4"
				onSubmit={onClickSubmission}
			>
				<label
					className="block mb-1 text-white after:content-['*'] after:ml-0.5 after:text-red-400"
					htmlFor="spotify"
				>
					spotify song url:
				</label>
				<input
					className="p-2.5 w-full text-sm text-gray-900 bg-slate-900 border-4 border-slate-300 placeholder-gray-300 text-white mb-2"
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
					describe recommendation:
				</label>
				<textarea
					className="p-2.5 w-full text-sm text-gray-900 bg-slate-900 border-4 border-slate-300 placeholder-gray-300 text-white mb-2"
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
					className="mx-auto sm:w-1/3 bg-slate-700 text-slate-300 font-bold border-4 border-slate-300 shadow-lg mt-2 p-1"
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
