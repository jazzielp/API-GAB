const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Servidor en línea...");
});

console.log("Listo...");


app.listen(port, () => {
  console.log("My port " + port);
});
