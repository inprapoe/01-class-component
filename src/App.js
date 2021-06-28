import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen.jsx';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DetailScreen from './pages/DetailScreen';

function App() {
  return (
    <Router>
      <Navbar/>
      <main className="">
        <Route path="/anime/:id" component={DetailScreen}></Route>  
        <Route path="/" component={HomeScreen} exact/>
      </main>
    </Router>
  );
}

export default App;
