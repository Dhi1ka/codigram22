require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = +process.env.PORT || 5000;
const router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.use("/", (req, res) => {
  res.status(404).json({
    message: `404 Page Not Found`,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
