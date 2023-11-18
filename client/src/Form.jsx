import Error from "./Error";
const Form = ({ onClickSubmission, error, handleOnError }) => {
	return (
		<div className="bg-slate-500 shadow-xl rounded p-5">
			<form
				className="mx-auto lg:w-96 flex flex-col"
				onSubmit={onClickSubmission}
			>
				<label className="text-slate-100" htmlFor="spotify">
					spotify url:
				</label>
				<input
					className="border border-slate-800 border-2 rounded mb-4 bg-slate-300"
					type="text"
					name="spotify"
					id="spotify"
					pattern="https:\/\/open\.spotify\.com\/track\/[A-Za-z0-9]+\?si=([A-Za-z0-9]+)"
					required
				/>
				<label className="text-slate-100" htmlFor="recommendation">
					describe song:
				</label>
				<textarea
					className="border border-slate-800 bg-slate-300 border-2 rounded"
					name="recommendation"
					id="recommendation"
					cols="30"
					rows="3"
					maxLength={80}
					required
					style={{ resize: "none" }}
				></textarea>
				<button
					className="mx-auto sm:w-1/3 bg-slate-200 text-slate-900 font-bold shadow-lg rounded mt-2 p-1"
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
