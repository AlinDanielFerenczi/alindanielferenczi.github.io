import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/views/Home';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Chatbot from './components/common/Chatbot';
import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/views/Dashboard';

export interface IUserData {
  messages: [],
  user: {},
  isAuthenticated: boolean,
}

const config = {
  apiKey: "AIzaSyAWSbmLVn4fcW2bCkebr5SE3kOTSb0CtKI",
  authDomain: "personalwebsite-51279.firebaseapp.com",
  databaseURL: "https://personalwebsite-51279.firebaseio.com",
  projectId: "personalwebsite-51279",
  storageBucket: "personalwebsite-51279.appspot.com",
  messagingSenderId: "837623330342",
  appId: "1:837623330342:web:85063ba181ccc447a058e7",
  measurementId: "G-CLY61BPE6B"
};

firebase.initializeApp(config);
firebase.analytics();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%'
    }
  }),
);


const signIn = async() => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  try {
    //await firebase.auth().signInWithPopup(googleProvider);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const classes = useStyles();
  const [UserData, setUserData] = useState<IUserData>({isAuthenticated: false, user: {}, messages: []});


  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserData({ isAuthenticated: true, user, messages: [] });
      } else {
        setUserData({ isAuthenticated: false, user: {}, messages: [] });
      }
    });
  });

  return (
    <div className={classes.root}>
      <Header />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      <Chatbot isAuthenticated={UserData.isAuthenticated} signIn={signIn}/>
    </div>
  );
}

export default App;

