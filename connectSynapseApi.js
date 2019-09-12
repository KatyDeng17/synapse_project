const Synapse = require("synapsenode");
const Client = Synapse.Client;
const User = Synapse.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;

//connecting to synapseApi via synapsenode
const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: "127.0.0.1",
  // isProduction boolean determines if production (true) or sandbox (false) endpoint is used
  isProduction: false
});

//APIs
//get all Users from Synapse Api
const getUsers = (req, res) => {
  client.getAllUsers().then(({ data }) => {
    res.json(data);
  });
};
//end get all Users from Synapse Api////

//create user with KYC
const createNewUser = (req, res) => {
  console.log(req.body);
  const { name, phone, email } = req.body;
  client
    .createUser({
      logins: [
        {
          email
        }
      ],
      phone_numbers: [phone, email],
      legal_names: [name],
      documents: [
        {
          email: "test@synapsefi.com",
          phone_number: "901.111.1111",
          ip: "::1",
          name,
          alias: "",
          entity_type: "M",
          entity_scope: "Arts & Entertainment",
          day: 2,
          month: 5,
          year: 1989,
          address_street: "1 Market St.",
          address_city: "SF",
          address_subdivision: "CA",
          address_postal_code: "94105",
          address_country_code: "US",
          virtual_docs: [],
          physical_docs: [],
          social_docs: []
        }
      ],
      extra: {
        supp_id: "122eddfgbeafrfvbbb",
        cip_tag: 1,
        is_business: false
      }
    })
    .then(userData => {
      console.log(
        `New User created: User Name ${
          userData.body.legal_names[0]
        }; User Id : ${userData.id}`
      );
      console.group("new user created");
      res.send(userData);
    })
    .catch(err => console.log(err));
}; //create user end

// get user by ID

const getUser = (req, res) => {
  const { userId } = req.params;

  client
    .getUser(userId)
    .then(data => res.send(data.body))
    .catch(err => console.log(err));
};

// const openDepositAccount = async (req, res) => {
//   const { document_id } = req.body;
//   const body = {
//     type: "DEPOSIT-US",
//     info: {
//       nickname: "My Deposit Account",
//       document_id
//     }
//   };
//   user.createNode(body);
// };

// const user = id => {
//   return client.getUser(id);
// };

module.exports = {
  getUsers,
  createNewUser,
  getUser
};
