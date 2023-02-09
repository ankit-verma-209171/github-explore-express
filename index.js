const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/bye", (req, res) => {
  res.json({ bye: "world" });
});

app.get("/feature", (req, res) => {
  res.json({ feature: "new feature" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port: ${port}`));
}

module.exports = app;
