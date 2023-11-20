type FormProps = {
	onClickSubmission: (e: React.FormEvent<HTMLFormElement>) => void,
	urlValue: string,
	textValue: string,
	handleUrlInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	handleTextInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
const Form = ({
	onClickSubmission,
	urlValue,
	textValue,
	handleUrlInputChange,
	handleTextInputChange,
}: FormProps) => {
	return (
		<div>
			<form className="sm:w-[450px] flex flex-col" onSubmit={onClickSubmission}>
				<label
					className="block font-bold mb-1 text-white after:content-['*'] after:ml-0.5 after:text-red-400"
					htmlFor="spotify"
				>
					spotify song url:
				</label>
				<input
					className="p-2.5 w-full text-sm text-gray-900 bg-indigo-950 border-4 border-indigo-300 placeholder-gray-300 text-white rounded mb-2"
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
					className="block font-bold mb-1 text-white after:content-['*'] after:ml-0.5 after:text-red-400"
					htmlFor="recommendation"
				>
					short description:
				</label>
				<textarea
					className="p-2.5 w-full text-gray-900 bg-indigo-950 border-4 border-indigo-300 placeholder-gray-300 text-white rounded mb-2"
					placeholder="This song is dark and moody..."
					name="recommendation"
					id="recommendation"
					cols={30}
					rows={2}
					maxLength={100}
					onChange={handleTextInputChange}
					value={textValue}
					required
					style={{ resize: "none" }}
				/>
				<button
					className="mx-auto sm:w-1/3 bg-indigo-500/70 text-indigo-100 font-bold border-4 border-indigo-300 shadow-lg rounded mt-2 p-1"
					type="submit"
				>
					Submit Song
				</button>
			</form>
		</div>
	);
};

export default Form;
