const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const port = process.env.PORT || 5001;
const synapse = require("./connectSynapseApi");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/allusers", synapse.getUsers);
app.post("/signup", synapse.createNewUser);
app.get("/:userId", synapse.getUser);

// app.get("/openDepositAccount/:userId", (req, res) => {
//   console.log(req.params.userId);
//   console.log(req.body.document_id);
//   synapse
//     .openDepositAccount(req.params.userId, req.body.document_id)
//     .then(account => res.send(account.data))
//     .catch(err => console.log(err));
// });

// app.post("/test", (req, res) => {
//   const { name, phone, password } = req.body;
//   bcrypt.hash(password, saltRounds, (err, hash) => {
//     if (err) throw err;
//     const userInfo = {
//       name,
//       phone,
//       password: hash
//     };
//     res.send(userInfo);
//   });
// });

app.listen(port, () => {
  console.log(`express server is listening on ${port}...`);
});
