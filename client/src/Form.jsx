const Form = ({ formSubmission }) => {
	return (
		<div className="bg-slate-500 p-5">
			<form className="mx-auto w-96 flex flex-col" onSubmit={formSubmission}>
				<label className="text-slate-100" htmlFor="spotify">spotify url:</label>
				<input
					className="border border-slate-800 border-2 rounded mb-4 bg-slate-300"
					type="text"
					name="spotify"
					id="spotify"
				/>
				<label className="text-slate-100" htmlFor="recommendation">why do you recommend this song?</label>
				<textarea
					className="border border-slate-800 bg-slate-300 border-2 rounded"
					name="recommendation"
					id="recommendation"
					cols="30"
					rows="5"
					style={{ resize: "none" }}
				></textarea>
				<button
					className="mx-auto w-1/3 bg-slate-200 text-slate-900 font-bold shadow-lg rounded mt-2"
					type="submit"
				>
					Submit Song
				</button>
			</form>
		</div>
	);
};

export default Form;
