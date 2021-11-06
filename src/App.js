import React, { Component } from 'react'
import axios from 'axios'
import User from './user'
import './App.css';
export class App extends Component {
  state={
    users:[],
    text:"",
    user:[]
  }
  componentDidMount() {
    axios.get('https://api.github.com/users?since=135>; rel="next"')
    .then((response)=>{
      this.setState({users:response.data})
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
 }
 onChangeHandler=(e)=>{
  this.setState({text:e.target.value})
  axios.get(`https://api.github.com/users/${this.state.text}`)
        .then((response)=>{
            console.log(response)
            this.setState({user:response.data})
        })
 }
 
  render() {
    let users=null;
    if(this.state.users){
     users= this.state.users.map((user)=>{
         return (
         <User key={user.id} img={user.avatar_url} name={user.login} url={user.url}/>
        )
      })
    }
    return (
      <div className=' container app' >
        <div className="row heading">
            <div className="col-sm-3 col-xs-3 heading-avatar">
              <div className="heading-avatar-icon">
                <img src="https://icon-library.net/images/github-svg-icon/github-svg-icon-18.jpg"/>
              </div>
            </div>
            <div className="col-sm-1 col-xs-1  heading-dot  pull-right">
              <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
            </div>
            <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
              <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
            </div>
          </div>
         
          <div className="row searchBox">
            <div className="col-sm-12 searchBox-inner">
              <div className="form-group has-feedback">
                <input id="searchText" type="text" className="form-control" name="searchText" onChange={this.onChangeHandler} placeholder="Search"/>
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
              </div>
            </div> 
       {users} 
      </div>
    )
  }
}

export default App
