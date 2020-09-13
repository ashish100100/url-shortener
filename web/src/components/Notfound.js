import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Notfound extends Component {
    render() {
      return (
      <React.Fragment>
        <div style={{textAlign:'center', marginBottom:'5px'}}>
          <h1>404 Error: URL Not found or expired.</h1>
          <Link  to="/">Go back to home</Link></div>
      </React.Fragment>
      );
    }
 }

 export default Notfound;