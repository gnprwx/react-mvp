import pg from "pg";
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const { PORT, DATABASE_URL } = process.env;
const app = express();
const client = new pg.Client({ connectionString: DATABASE_URL });
await client.connect();

app.use(express.json());

app.get("/api/songs", (_, res, next) => {
	client
		.query("SELECT * FROM songs ORDER BY id DESC")
		.then((data) => res.send(data.rows))
		.catch(next);
});

const postSongs = async (req, res, next) => {
	const { url, text } = req.body;
	try {
		await client.query(`INSERT INTO songs(url,text) VALUES($1, $2)`, [
			url,
			text,
		]);
		res.sendStatus(201);
	} catch (error) {
		next(error);
	}
};

app.post("/api/songs", postSongs);

app.use((_, res) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.log(err);
	res.sendStatus(500);
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
