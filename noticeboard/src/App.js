import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";

import Main from "./pages/Main"
import Write from './pages/Write';
import Detail from './pages/Detail';


import { Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
        <BrowserRouter>
          <Route path = "/" exact component = {Main}/>
          <Route path = "/write" exact component = {Write}/>
          <Route path ="/detail/:index" exact component={Detail}/>
      </BrowserRouter>
  );
}

export default App;
