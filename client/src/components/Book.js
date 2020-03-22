import React, { Component } from 'react';
import Card from './Card';

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoaded: false,
      key: '',
      deleted: false
    };
  }

  deleteHandler = id => event => {
    event.preventDefault();
    fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3Mzc1ZDFlMDRjYzIzOTg4NjBhNWZkIn0sImlhdCI6MTU4NDYyNTEwNSwiZXhwIjoxNTg0OTg1MTA1fQ.TMKFR2y3mRT9uURdIOuYtkhQFbXsqSQltDT_F29IpCY',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .then(
        this.setState({
          deleted: true
        })
      )
      .catch(console.log);
  };

  componentDidUpdate(prevProps, prevState) {
    fetch('http://localhost:5000/api/contacts', {
      method: 'GET',
      headers: {
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3Mzc1ZDFlMDRjYzIzOTg4NjBhNWZkIn0sImlhdCI6MTU4NDYyNTEwNSwiZXhwIjoxNTg0OTg1MTA1fQ.TMKFR2y3mRT9uURdIOuYtkhQFbXsqSQltDT_F29IpCY'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data, isLoaded: true });
        console.log(data);
      })
      .catch(console.log);
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.deleted == this.state.deleted) {
      return true;
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/contacts', {
      method: 'GET',
      headers: {
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3Mzc1ZDFlMDRjYzIzOTg4NjBhNWZkIn0sImlhdCI6MTU4NDYyNTEwNSwiZXhwIjoxNTg0OTg1MTA1fQ.TMKFR2y3mRT9uURdIOuYtkhQFbXsqSQltDT_F29IpCY'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data, isLoaded: true });
        console.log(data);
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        <div className="row">
          <p className="col-sm-12 bg-primary p text-center">
            <strong>MY CONTACT LIST</strong>
          </p>
        </div>
        {this.state.isLoaded ? (
          <div className="row" key="1">
            {this.state.contacts.data.map(contact => (
              <div className="col-sm-6" key={contact.name.toString()}>
                <Card
                  data={contact}
                  key={contact.phone.toString()}
                  function={this.deleteHandler}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Book;
