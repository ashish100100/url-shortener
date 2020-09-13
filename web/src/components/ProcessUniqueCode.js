import React, { Component } from 'react';
import {getVisitorInfo, postUniqueCode} from '../helper/functions';
import { Redirect } from 'react-router-dom';
class ProcessUniqueCode extends Component {

  constructor(props) {
      super(props);
      this.redRef = React.createRef();
      this.state ={
          unique_code: this.props.match.params.unique_code,
          country_code: '',
          country_name: '',
          ip: '',
          original_url: '',
          redirect_notfound: false
      }
  }

  componentDidMount(){
        getVisitorInfo().then((response)=>{
            this.setState({
                country_code: response.country_code,
                country_name: response.country_name,
                ip: response.ip
            });
            const data = {
                unique_code: this.state.unique_code,
                country_code:  response.country_code,
                country_name: response.country_name,
                ip: response.ip
            }
            postUniqueCode(data).then((response => {

                if(response.code === 404){
                    this.setState({
                        redirect_notfound: true
                    })
                }else{
                    this.setState({
                        original_url: response.original_url
                    })
                    this.redRef.current.click();
                }
            }))
        });
  }

    render() {
    if(this.state.redirect_notfound){
        return <Redirect to="/404" />
    }
      return (
      <React.Fragment>
          <a ref={this.redRef} href={this.state.original_url}></a>
      </React.Fragment>
      );
    }
 }

 export default ProcessUniqueCode;