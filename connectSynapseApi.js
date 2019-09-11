const Synapse = require("synapsenode");
const Client = Synapse.Client;

const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: "127.0.0.1",
  // isProduction boolean determines if production (true) or sandbox (false) endpoint is used
  isProduction: false
});

//get all Users from Synapse Api
const getUsers = (req, res) => {
  client.getAllUsers().then(({ data }) => {
    res.json(data);
  });
};
//end get all Users from Synapse Api////

module.exports = {
  getUsers
};
