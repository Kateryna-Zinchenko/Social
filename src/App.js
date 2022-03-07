import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    const person = {name: 'Kate', surname: 'Zinchenko'}
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar className />
            <Profile person={person}/>
        </div>
    );
}


export default App;
