import React from "react";
const axios = require("axios");

class Form extends React.Component {
  state = {
    user: {
      name: "",
      email: "",
      phone: ""
    }
  };
  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:5000/signup", this.state.user)
      .then(res => {
        console.log(res.data);
        alert("You account is created");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                placeholder="Full Name"
                onChange={e => {
                  const user = {
                    ...this.state.user,
                    name: e.target.value
                  };
                  this.setState({
                    user
                  });
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={this.state.user.email}
                placeholder="Email"
                onChange={e => {
                  const user = {
                    ...this.state.user,
                    email: e.target.value
                  };
                  this.setState({
                    user
                  });
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.user.phone}
                placeholder="phone"
                onChange={e => {
                  const user = {
                    ...this.state.user,
                    phone: e.target.value
                  };
                  this.setState({
                    user
                  });
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Open Account"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
