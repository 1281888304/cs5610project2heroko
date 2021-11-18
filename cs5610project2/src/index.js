import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Popup from 'react-popup';
import './index.css';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import BattleShipBoard from './BattleShipBoard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Rules from './Rules';
import 'bootstrap/dist/css/bootstrap.css'

const store=createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    {/*<h2>BattleShip game</h2>*/}
    <Router>
    
      <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/gameBoard/:gameType" element={<BattleShipBoard />} />
      <Route path="/rule" element={<Rules />} />
      </Routes>
    </Router>
    </Provider>,

  document.getElementById('root')
);


