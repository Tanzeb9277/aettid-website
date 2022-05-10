import React, { Component } from 'react';
import './Login.css'

class Login extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className='login' id='login'>
                <div className='screen' onClick={this.props.onClick}>

                </div>
                <div className='login-card'>
                    <div className='header-img'>
                    </div>
                    <div className='login-form'>
                        <form>
                            <h1>Log In</h1>
                            <input type="text" placeholder='Email'/>
                            <input type="password" placeholder='Password'/>
                            <button onClick={this.props.onClick}>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;