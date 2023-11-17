import pg from "pg";
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const { PORT, DATABASE_URL } = process.env;
const app = express();
const client = new pg.Client({ connectionString: DATABASE_URL });
await client.connect();

app.use(express.json());

app.get("/api", (req, res) => {
	console.log("Testing!");
	res.send();
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});