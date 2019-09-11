const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const port = process.env.PORT || 5001;
const synapse = require("./connectSynapseApi");

app.get("/AllUsers", synapse.getUsers);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`express server is listening on ${port}...`);
});
