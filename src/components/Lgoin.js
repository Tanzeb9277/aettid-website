import React, { useEffect, useState } from "react";
import { config } from "../config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Login.css'

const firebaseConfig = {

    apiKey: config.apiKey,
  
    authDomain: config.authDomain,
  
    projectId: config.projectId,
  
    storageBucket: config.storageBucket,
  
    messagingSenderId: config.messagingSenderId,
  
    appId: config.appId,
  
    measurementId: config.measurementId
  
  };
  var app = firebase.initializeApp(firebaseConfig);

 

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  

  const register = (e) => {
    e.preventDefault();
    if (!email) alert("Please enter email");
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById("signup-form").style.display = 'none';
    document.getElementById("login-form").style = 'display: block;';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  };

  const signIn = (e) =>{
    e.preventDefault();
    if (!email) alert("Please enter email");
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        let email = user.email;
        let username = email.split('@')
        document.getElementById('nav-username').innerText = `Hey, ${username[0]}`;
        document.getElementById('nav-username').setAttribute('data-login', 'true');
        document.getElementById("login").style = 'display: none;';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  const changeForm =(e)=> {
        let to = e.target.getAttribute('data-tochange');
        let from = e.target.getAttribute('data-changefrom');
        document.getElementById(from).style.display = 'none';
        document.getElementById(to).style = 'display: block;';
  }


   




        return(
            <div className='login' id='login'>
                <div className='screen' onClick={props.onClick}>

                </div>
                <div className='login-card'>
                    <div className='header-img'>
                    </div>
                    <div className='login-form' id="login-form">
                        <form>
                            <h1>Log In</h1>
                            <input 
                                type="text" 
                                placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input 
                                type="password" 
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={signIn}>Log In</button>
                        </form>
                        <p>Don't have an Account? <span onClick={changeForm} data-tochange='signup-form' data-changefrom='login-form'>Sign Up</span></p>
                    </div>
                    <div className='signup-form' id="signup-form">
                        <form>
                            <h1>Sign Up</h1>
                            <input 
                                type="text" 
                                placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input 
                                type="password" 
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={register}>Sign Up</button>

                            
                        </form>
                        <p>Already have an Account? <span onClick={changeForm} data-tochange='login-form' data-changefrom='signup-form'>Login</span></p>
                    </div>
                </div>
            </div>
        )
    
}

export default Login;