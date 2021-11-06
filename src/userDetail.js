import React, { Component } from 'react'
import Axios from 'axios'

export class userDetail extends Component {
    state={
        user:{}
    }
    componentDidMount(){
        let name=this.props.location.state.userName
        console.log(name)
        Axios.get(`https://api.github.com/users/${name}`)
        .then((response)=>{
            console.log(response)
            this.setState({user:response.data})
        })
    }
    render() {
        return (
            <div className='active-user'>
            <h1 className='active-user__title'>{this.state.user.name}</h1>
            <img className='active-user__img' height='200px' alt='avatar' width='200px'src={this.state.user.avatar_url}/>
            <p className='active-user__website'>{this.state.user.url}</p>
            </div>
        )
    }
}

export default userDetail
