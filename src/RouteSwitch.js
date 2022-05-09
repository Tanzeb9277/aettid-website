import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Nav from "./components/Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" exact element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;