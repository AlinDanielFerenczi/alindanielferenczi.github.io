import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%'
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div id="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
