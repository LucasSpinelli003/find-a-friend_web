import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.get("/api/cep", async (req, res) => {
  const cep = req.query.cep;
  try {
    const response = await fetch(
      `https://www.cepaberto.com/api/v3/cep?cep=${cep}`,
      {
        headers: {
          Authorization: "Bearer 12992211",
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
