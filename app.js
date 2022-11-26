const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(300).send("Ajinkya Veer");
});

app.get("/register", (req, res) => {
  res.send("Please register if you are new");
});

app.get("/insta", (req, res) => {
  const insta = {
    userName: "AjinkyaVeer",
    Followers: 700,
  };
  res.status(200).json({ insta });
});

app.get("/features/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ id: req.params.token });
});

app.listen(port, () => {
  console.log("Success");
});
