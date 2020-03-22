import React, { Component } from 'react';

export class Home extends Component {
  state = {
    name: 'John',
    email: 'johndoe123@gmail.com',
    phoneNo: '9987654321'
  };

  nameHandler = name => event => {
    let newState = {
      ...this.state
    };
    newState[name] = event.target.value;

    this.setState({
      ...newState
    });
  };

  getData = e => {
    e.preventDefault();
    console.log('Hi');

    const data = {
      name: this.state.name,
      phone: this.state.phoneNo,
      email: this.state.email
    };

    fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3Mzc1ZDFlMDRjYzIzOTg4NjBhNWZkIn0sImlhdCI6MTU4NDYyNTEwNSwiZXhwIjoxNTg0OTg1MTA1fQ.TMKFR2y3mRT9uURdIOuYtkhQFbXsqSQltDT_F29IpCY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <div className="row">
          <p className="col-sm-12 bg-primary p text-center">
            <strong>ADD CONTACT</strong>
          </p>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <form
            className="card col-md-6"
            style={{ borderWidth: '5px', borderRadius: '50px' }}
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="John Doe"
                onChange={this.nameHandler('name')}
              />
            </div>
            <div className="form-group mt-0">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="johndoe123@gmail.com"
                onChange={this.nameHandler('email')}
              />
            </div>
            <div className="form-group mt-0">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="inputNumber"
                placeholder="9987654321"
                onChange={this.nameHandler('phoneNo')}
              />
            </div>
            <button onClick={this.getData} className="btn btn-primary mt-2">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
