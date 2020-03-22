import React, { Component, Fragment } from 'react';

class Card extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="card"
          style={{ borderWidth: '5px', borderRadius: '50px' }}
        >
          <div className="card-body">
            <h5
              className="card-title text-center font-weight-bold"
              style={{ fontSize: '2rem', marginBottom: '60px' }}
              key="1"
            >
              <kbd>{this.props.data.name}</kbd>
            </h5>
            <h6 className="card-subtitle mb-3" key="2">
              PHONE NO: {this.props.data.phone}
            </h6>
            <h6 className="card-subtitle mb-3" key="4">
              EMAIL ADDRESS: {this.props.data.email}
            </h6>
            <p className="card-text  text-muted" key="3">
              {this.props.data.type}
            </p>
            <a className="btn btn-primary my-1" style={{ width: '400px' }}>
              Edit
            </a>
            <a
              className="btn btn-danger"
              style={{ width: '400px' }}
              onClick={this.props.function(this.props.data._id)}
            >
              Delete
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

//     contacts = this.props.data
//   render() {
//     return (
//         {contacts.map(contact => {
//             <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">{this.props.data}</h5>
//             <div className="card-text">
//               <h2>{this.props.name}</h2>
//               <p>Phone Number:{this.props.phoneNo}</p>
//               <p>Email id:{this.props.email}</p>
//             </div>
//             <a className="btn btn-danger mb-2" style={{ width: '400px' }}>
//               Delete
//             </a>
//             <a className="btn btn-primary" style={{ width: '400px' }}>
//               Edit
//             </a>
//           </div>
//         </div>
//       </div>
//         })}
//     );
//   }

export default Card;
