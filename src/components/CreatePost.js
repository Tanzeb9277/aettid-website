import {useState} from 'react';
import { config } from "../config";
import { initializeApp } from "firebase/app";
import {useNavigate} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 



import './CreatePost.css'

const firebaseConfig = {

    apiKey: config.apiKey,
  
    authDomain: config.authDomain,
  
    projectId: config.projectId,
  
    storageBucket: config.storageBucket,
  
    messagingSenderId: config.messagingSenderId,
  
    appId: config.appId,
  
    measurementId: config.measurementId
  
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const storage = getStorage();
 





const CreatePost = () =>{
    const [image , setImage] = useState('');
    const navigate = useNavigate();
    

/*    const post = () =>{
        let title = document.getElementById('post-title').value;
        let img = document.getElementById('new-img').src;
        const imageRef = ref(storage, `${title}.jpg`);
        console.log(title, img)
        uploadBytes(imageRef, img).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
       try {
            const docRef = await addDoc(collection(db, "posts"), {
            title: "Ada",
            last: "Lovelace",
            born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        } 
    }*/ 

     const upload = async ()=>{
         console.log('working')
        let userInfo = document.getElementById('nav-username');
        let loginStatus = userInfo.getAttribute('data-login')
        let username = (userInfo.innerText).split(' ');
        let user = username[1]
        let title = document.getElementById('post-title').value;

        if(loginStatus == 'false'){
            alert("Must be Signed in to Post")
            return;
        }
        if(image == null){
            alert("Must add image")
            return;
        }
       try {
            const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            imagePath: `${image.name}`,
            user: user
            });
            console.log("Document written with ID: ", docRef.id);
            const imageRef = ref(storage, `${image.name}`)
            uploadBytes(imageRef, image).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
            navigate('/aettid-website', {replace: true})
;        } catch (e) {
            console.error("Error adding document: ", e);
        } 
      }
 


    const preview = (e) => {
        setImage(e.target.files[0])
        const [file] = e.target.files
        if (file) {
            let img = document.getElementById('new-img');
            document.getElementById('alt-text').style.display = "none";
            img.src = URL.createObjectURL(file);
            let height = img.offsetHeight;
            document.getElementById('new-post').style.height = height + 156;

        }
      }


        return(
            <div className="create-post">
                <h2>Create Post</h2>
                <hr></hr>
                <div className='input-form' id='new-post'>
                    <form>
                        <input type="text" id='post-title' required placeholder='Title' />
                        <div className='img-input'>
                            <input type="file" id="new-post-img" name="post-img" onChange={preview} accept="image/png, image/jpeg"/>
                            <div className='img-preview' id='preview'>
                                <h1 id='alt-text'>Add Image</h1>
                                <img id="new-img" src='' alt=''/>  
                            </div>
                        </div>
                    </form>
                    <div className='submit-post'>
                        <button onClick={upload}>Post</button>
                    </div>
                </div>
            </div>
        )
    }


export default CreatePost