import React from 'react';
import './App.css';
import Places from './components/places'
import QuestionList from './components/questions'


import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <MuiThemeProvider>
     <AppBar title="wqerrgf" />
    <div className="App">
      <Places />
      <QuestionList />
    </div>
      </MuiThemeProvider>
  );
}

export default App;
