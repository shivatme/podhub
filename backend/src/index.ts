import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello from PodApp Backend!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
