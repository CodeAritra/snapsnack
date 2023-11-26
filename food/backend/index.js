const express = require("express");
const connectToMongo = require("./db");
const app = express();

const port = 5000;

connectToMongo();

//middleware

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With, Content-Type,Accept"
  );
  next();
});
//-------------------------------------------------------------------------

app.use(express.json());
app.use("/api", require("./routes/CreateUser"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});