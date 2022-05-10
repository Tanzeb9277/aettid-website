import React, { Component } from 'react';
import './CreatePost.css'

class CreatePost extends Component{
    constructor(props){
        super(props)
    }


    preview = (e) => {
        const [file] = e.target.files
        if (file) {
            let img = document.getElementById('new-img');
            document.getElementById('alt-text').style.display = "none";
            img.src = URL.createObjectURL(file);
            let height = img.offsetHeight;
            console.log(height)
            document.getElementById('new-post').style.height = height + 156;

        }
      }

    render(){
        return(
            <div className="create-post">
                <h2>Create Post</h2>
                <hr></hr>
                <div className='input-form' id='new-post'>
                    <form>
                        <input type="text" required placeholder='Title' />
                        <div className='img-input'>
                            <input type="file" id="new-post-img" name="avatar" onChange={this.preview} accept="image/png, image/jpeg"/>
                            <div className='img-preview' id='preview'>
                                <h1 id='alt-text'>Add Image</h1>
                                <img id="new-img" src="#" alt=''/>  
                            </div>
                        </div>
                    </form>
                    <div className='submit-post'>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost