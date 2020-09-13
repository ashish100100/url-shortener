import React, { Component } from 'react';
import {postAddUrl, isUrlValid} from '../helper/functions';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
      super(props);

      this.state = {
          original_url: '',
          short_url:'',
          unique_code: '',
          message: '',
          success: false
      }
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  onSubmit= () => {
    if(isUrlValid(this.state.original_url)){
        const data = { 
            original_url: this.state.original_url
        };
        postAddUrl(data).then((response)=> {
            if(response.success){
                this.setState({
                  original_url: response.short_url,
                  short_url: response.short_url,
                  unique_code: response.unique_code,
                  message: response.message,
                  success: true
                });
            }else{
                this.setState({
                  original_url: '',
                  short_url: '',
                  unique_code: '',
                  message: response.message,
                  success: false
                });
            }
        })
      }else{
        this.setState({
          message: "Enter a valid URL.",
          success: false
        });
      }
  }

    render() {
      return (
      <React.Fragment>
        <div style={{textAlign:'center'}}>
      <h1>Welcome to URL Shortner</h1>
<div style={{textAlign:'center', marginBottom:'5px'}}><Link  to="/stats">View Analytics</Link></div>

             <p>please enter your URL here:</p>
             <input 
             style={{width:'670px', padding: '7px'}} 
             type="text" 
             name="original_url"
             value={this.state.original_url}
             onChange={this.onChange}
             />
             <br/>
             <button onClick={this.onSubmit} type="button">Generate Short Url</button>
            
            {this.state.success ? (
                <div>
                    <br/>
                    <br/>
                    <p style={{color:'green'}}>{this.state.message}</p>
                    <p>Here's your short URL:</p>
                    <p>{this.state.short_url}</p>
                </div>

            ) : (
              <div>
               <p style={{color:'red'}}>{this.state.message}</p>
                
              </div>
            )}
        </div>
      </React.Fragment>
      );
    }
 }

 export default Home;