import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";

import Main from "./pages/Main"
import Write from './pages/Write';
import Detail from './pages/Detail';
import Header from './component/Header';

import { Route, BrowserRouter } from "react-router-dom";


function App() {

  return (

    <React.Fragment>
        <BrowserRouter>
          <Route path = "/" exact component = {Header}/>
          <Route path = "/write" exact component = {Write}/>
          <Route path = "/detail" exact component = {Detail}/>
        
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
