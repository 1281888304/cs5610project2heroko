import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MyNavBar from "./MyNavBar";
import './Welcome.css'
export default function WelcomePage() {


    return (<div class="WelcomePage">
        <MyNavBar/>
        <div className="link-container">
            <h1>
            Welcome to Battleship!
            </h1>
            <h3><Link to={"/gameBoard/normal"} className ={"link"}>Play normal Game</Link></h3>
            <h3><Link to={"/gameBoard/free"} className ={"link"}>Play free play Game</Link></h3>
            <h3><Link to={"/rule"} className ={"link"}>Rules</Link></h3>
        </div>
    </div>)

}