import React, { Component } from 'react';
import './Post.css'

class Post extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="post">
                <div className='sidebar'>
                    <div className='like'>

                    </div>
                    <div className='save'>

                    </div>
                    <div className='share'>

                    </div>
                </div>
                <div className='main'>
                    <div className='user'>
                        <div className='post-avatar'>
                            <img className='avatar-img' src=''/>
                        </div>
                        <h2 className='username'>Username</h2>
                    </div>
                    <div className='title'>
                        Here is a Title
                    </div>
                    <div className='post-img'>
                        <img src=''/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post