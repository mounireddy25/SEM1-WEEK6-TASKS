import React from 'react';
import App1 from './assets/Components/App1';
import Footer from './assets/Components/Footer';
import Header from './assets/Components/Header';
import Profile from './assets/Components/Profile';
import UserCard from './assets/Components/Usercard';

const App = () => {
  return (
    <>
    <App1/>
    <br />
    <Footer/>
    <br />
    <Header/>
    <br />
    <div>
      <Profile name="Mouni" age="19"/>
      <UserCard name="Mouni" location="Banglore" />
    </div>
    </>
  )
}

export default App
