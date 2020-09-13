import React, { Component } from 'react';
import {statsList, getVisitorInfo} from '../helper/functions';
import { Link } from 'react-router-dom';

class Stats extends Component {

  constructor(props) {
    super(props);
    this.state ={
        ip: '',
        statsData: [],
        resultSuccess: false
    }
  }


  componentDidMount(){
    getVisitorInfo().then((response)=>{
        this.setState({
            ip: response.ip
        });
        const data = {
            ip: response.ip
        }
        statsList(data).then((response => {
                if(response.success){
                    this.setState({
                        statsData: response.data,
                        resultSuccess: true
                    })
                }
        }))
    });
}




    render() {
      return (
        <React.Fragment>
          <div style={{marginLeft:'20px'}}>
      <h2>Analytics -> IP -> {this.state.ip}</h2>
          <div style={{textAlign:'center', marginBottom:'5px'}}><Link  to="/">Home</Link></div>
                 
         {this.state.resultSuccess && this.state.statsData.length < 1 ? ("No Records Found in Database for "+ this.state.ip + ', Analytics will be display here once you open your short URL in browser.') : ''}

                {this.state.statsData.map((i,d) => {
                   
                 return (  <div style={{border:'1px solid grey',width:'90%', padding: '15px', marginBottom: '15px'}}>
                      <strong>{i.original_url}</strong>
                      <p>{i.short_url}</p>
                      <p>Total Clicks: {i.totalClicks}</p>
                      <p>Countries: {i.top_countries}</p>
                    </div>
                 )

                })}





          </div>
        </React.Fragment>
      )
    }
 }

 export default Stats;