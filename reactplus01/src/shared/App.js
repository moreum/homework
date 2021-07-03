import React from 'react';
import './App.css';


import {BrowserRouter, Route} from "react-router-dom"
import PostList from '../pages/PostList';
import Login from "../pages/Login"

import Header from '../components/Header';
import { Grid } from '../elements';
import Signup from '../pages/Signup';

import { firestore } from '../firebase';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact component={PostList}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );

  
  const homework01 = firestore.collection("image-community");
  homework01.doc("image01").get().then((doc)=> {
    console.log(doc);
    console.log(doc.data());
  }

}


export default App;
