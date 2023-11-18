const Directions = () => {
	return (
		<div className="bg-slate-600 shadow-xl rounded p-5 text-slate-200">
			<p className="uppercase font-bold underline decoration-slate-400 decoration-2 tracking-wider">
				Directions
			</p>
			<p className="pb-1">
				Spotify URL can be retrieved by right-clicking a song in Spotify, then
				clicking{" "}
				<span className="underline decoration-2 decoration-pink-300">
					Share
				</span>{" "}
				in the context menu, then{" "}
				<span className="underline decoration-2 decoration-pink-300">
					Copy Song Link
				</span>
				. Paste the song link into the Spotify URL box.
			</p>
			<hr />
			<span>Example:</span>
			<textarea
				rows="2"
				className="w-full text-sm bg-slate-300 text-slate-900 p-1"
				style={{ resize: "none" }}
			>
				https://open.spotify.com/track/1F7wq8a3kwwRH2TiHB0I42?si=6e13e41242704a35
			</textarea>
			<hr />
			<p className="pt-1">
				Then provide a brief description on why you recommend this song.
			</p>
		</div>
	);
};

export default Directions;
