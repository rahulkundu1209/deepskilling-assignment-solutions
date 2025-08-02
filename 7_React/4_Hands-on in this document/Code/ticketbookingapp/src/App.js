import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Auth from './components/Auth';
import FlightDetails from './components/FlightDetails';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const loginHandler = () =>{
    const loginStatus = !isLoggedin;
    setIsLoggedin(loginStatus);
  }

  return (
    <div className="App">
      <h1 style={{color: "violet"}}>Welcome to Flight Booking</h1>
      <Auth isLoggedin = {isLoggedin} loginHandler = {loginHandler}/>
      <FlightDetails isLoggedin={isLoggedin}/>
    </div>
  );
}

export default App;
