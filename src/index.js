import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router, link } from "react-router-dom";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

function App() {
    
    return(
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element = {<Login />}></Route>
            <Route path="/home" element = {<Main />}></Route>
            <Route path="/login" element = {<Main />}></Route>
            <Route path="/registration" element = {<Main />}></Route>
            <Route path="/detail/:id" element = {<Detail />}></Route>
        </Routes>
      </BrowserRouter>
      </React.Fragment>
    )

}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);