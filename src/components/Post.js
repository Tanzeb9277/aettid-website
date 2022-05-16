import React, { Component } from 'react';
import './Post.css'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import LineIcon from "react-lineicons";



class Post extends Component{
    constructor(props){
        super(props)
    }



    liked = (e) =>{
        let like = e.target.getAttribute("data-liked")
        if(like == "false"){
            e.target.setAttribute("class", "lni lni-lni lni-heart-filled size-md ")
            e.target.setAttribute("data-liked", "true")
            e.target.style.color = '#ec5451'
        }else{
            e.target.setAttribute("class", "lni lni-lni lni-heart size-md" )
            e.target.setAttribute("data-liked", "false")
            e.target.style.color = 'black'
        }
        
    }

    bookmark = (e) =>{
        let bookmark = e.target.getAttribute("data-bookmark")
        if(bookmark == "false"){
            e.target.setAttribute("class", "lni lni-lni lni-bookmark-filled size-md ")
            e.target.setAttribute("data-bookmark", "true")
        }else{
            e.target.setAttribute("class", "lni lni-lni lni-bookmark size-md" )
            e.target.setAttribute("data-bookmark", "false")
        }
        
    }

    render(){
        return(
            <div className="post">
                <div className='sidebar'>
                    <div className='like'>
                        <LineIcon name="lni lni-heart" onClick={this.liked} data-liked="false"/>
                    </div>
                    <div className='share'>
                        <LineIcon name="lni lni-share-alt-1" />
                    </div>
                </div>
                <div className='main'>
                    <div className='user'>
                        <div className='post-avatar'>
                            <img className='avatar-img' src=''/>
                        </div>
                        <h2 className='username'>{this.props.user}</h2>
                    </div>
                    <div className='title'>
                        {this.props.title}
                    </div>
                    <div className='post-img'>
                        <img id={this.props.path}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post