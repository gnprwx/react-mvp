import pg from "pg";
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const { PORT, DATABASE_URL } = process.env;
const app = express();
const client = new pg.Client({ connectionString: DATABASE_URL });
await client.connect();

app.use(express.json());

app.get("/api/songs", getSongs);
app.post("/api/songs", postSongs);

async function getSongs(_, res, next) {
	try {
		const request = await client.query(
			"SELECT * FROM songs ORDER BY RANDOM() LIMIT 10"
		);
		const data = await request;
		res.send(data.rows);
	} catch (error) {
		next(error);
	}
}

async function postSongs(req, res, next) {
	try {
		const { url, text } = req.body;
		await client.query(`INSERT INTO songs(url,text) VALUES($1, $2)`, [
			url,
			text,
		]);
		res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}

app.use((_, res) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	res.sendStatus(500);
	throw err;
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
