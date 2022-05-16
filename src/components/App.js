import Post from './Post';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { config } from "../config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, doc, getDoc, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";



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


function App(props) {

  const [posts, setPosts] = useState([]);

  const getPosts = async (calledFrom = 'function') => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    console.log(calledFrom)
    const saveFirebasePosts = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        saveFirebasePosts.push(data);
        console.log(saveFirebasePosts)
      });
      setPosts(saveFirebasePosts);
      
    }
    const getImg = (path) => {
      const storage =  getStorage();
      getDownloadURL(ref(storage, path))
      .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
          // insert into an <img> element
          
         let img = document.getElementById(path);
         img.setAttribute('src', url)
      })
      .catch((error) => {
          // Handle any errors
      });
  }
    


  useEffect(() => {
    getPosts("useEffect");

  }, [])
  
 





  

  return (
    <div className="App">
      <div className='posts'>
        <div className='create'>
          Home
          <Link to="/create-post">
            <button>Create Post</button>
          </Link>
        </div>
        {posts.map((post) => {
              let src = getImg(post.imagePath);
              console.log(src);
              return <Post
                user={post.user}
                title={post.title}
                path={post.imagePath}
              />;
            })}
      </div>
      <div className='info-card'>
          <div className="ft-recipe">
            <div className="ft-recipe__thumb">
                <h3>Today's Featured Recipe</h3><img src="https://zippypaws.com/app/uploads/2018/05/strawberry-waffles-1024x668.jpg" alt="Strawberry Waffle" />
            </div>
            <div className="ft-recipe__content">
                <header className="content__header">
                    <div className="row-wrapper">
                        <h2 className="recipe-title">Strawberry Waffle</h2>
                        <div className="user-rating"></div>
                    </div>
                    <ul className="recipe-details">
                        <li className="recipe-details-item time"><i className="ion ion-ios-clock-outline"></i><span className="value">20</span><span className="title">Minutes</span></li>
                        <li className="recipe-details-item ingredients"><i className="ion ion-ios-book-outline"></i><span className="value">5</span><span className="title">Ingredients</span></li>
                        <li className="recipe-details-item servings"><i className="ion ion-ios-person-outline"></i><span className="value">4-6</span><span className="title">Serving</span></li>
                    </ul>
                </header>
                <p className="description"> There’s no better way to celebrate May being National Strawberry Month than by sharing a sweet treat with your pup!!! Strawberries...</p>
                <footer className="content__footer"><a href="#">View Recipe</a></footer>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
