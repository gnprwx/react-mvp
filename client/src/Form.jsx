const Form = ({ formSubmission }) => {
	return (
		<div className="bg-slate-800 text-slate-200 p-5">
			<form className="mx-auto w-96 flex flex-col" onSubmit={formSubmission}>
				<label htmlFor="spotify">spotify url:</label>
				<input
					className="border border-slate-800 rounded"
					type="text"
					name="spotify"
					id="spotify"
				/>
				<label htmlFor="recommendation">why do you recommend this song?</label>
				<textarea
					className="border border-slate-800 rounded"
					name="recommendation"
					id="recommendation"
					cols="30"
					rows="5"
					style={{ resize: "none" }}
				></textarea>
				<button
					className="mx-auto w-1/2 bg-slate-500 rounded mt-2"
					type="submit"
				>
					Submit Song
				</button>
			</form>
		</div>
	);
};

export default Form;
