import pg from "pg";
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const { PORT, DATABASE_URL } = process.env;
const app = express();
const client = new pg.Client({ connectionString: DATABASE_URL });
await client.connect();

app.use(express.json());

app.get("/api/songs", (req, res) => {
	client.query("SELECT * FROM songs").then((data) => res.send(data.rows));
});

app.post("/api/songs", (req, res) => {
	const { url, text } = req.body;
	client.query(`INSERT INTO songs(url,text)VALUES(${url},${text})`);
	res.send();
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
