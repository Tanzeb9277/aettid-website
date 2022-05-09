import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


  class Nav extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav>
                <div className='logo'>
                    <div className='logo-img'>
                        <img src=''/>
                    </div>
                    <h2>Aettid</h2>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search' id='search-bar'/>
                </div>
                <div className='account'>
                    <div className='avatar'>
                        <img className='avatar-img' src=''/>
                    </div>
                    <h2 className='username'>Account</h2>
                </div>
            </nav>
        )
    }
}
  
  export default Nav;