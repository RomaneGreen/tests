import React from 'react';
import './App.css';
import Places from './components/places'
import QuestionList from './components/questions'
import AppBar from './components/appbar'







function App() {
  return (
    <div className="App">
      <AppBar />
      <QuestionList />
      <Places />
    </div>
      
  );
}

export default App;
