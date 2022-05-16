import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Nav from "./components/Nav";
import Login from "./components/Lgoin";
import CreatePost from "./components/CreatePost";

const RouteSwitch = () => {

  const displayLogin = () =>{
    document.getElementById('login').style.display = "block"
  }

  const removeLogin = (e) =>{
    e.preventDefault();
    document.getElementById('login').style.display = "none"
  }

  return (
    <BrowserRouter>
    <Nav onClick={displayLogin}/>
      <Routes>
        <Route path="/aettid-website" exact element={<App />} />
        <Route path="/aettid-website/create-post" element={<CreatePost/>}/>
      </Routes>
    <Login onClick={removeLogin}/>
    </BrowserRouter>
  );
};

export default RouteSwitch;