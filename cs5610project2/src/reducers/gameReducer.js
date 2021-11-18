import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkValidCol(matrix, row, col, max) {
    if (col + max >= 10) {
        return false;
    }

    for (let i = col; i < col + max; i++) {
        console.log("checkValidCol: " + matrix[row][i]);
        if (matrix[row][i] === 'bad') {
            return false;
        }
    }

    return true;
}

function checkValidRow(matrix, row, col, max) {
    if (row + max >= 10) {
        return false;
    }

    for (let i = row; i < row + max; i++) {
        console.log("checkValidRow: " + matrix[i][col]);
        if (matrix[i][col] !== '0' && matrix[i][col] !== '') {
            return false;
        }
    }

    return true;
}

function initShips(boardState, shipLength) {
    let row=randomIntFromInterval(0,9);
    let col=randomIntFromInterval(0,9);

    let rotation = randomIntFromInterval(0,1);
    if (rotation === 1) {
        while (!checkValidCol(boardState, row, col, shipLength)) {
            console.log("check row: " + row + " col: " + col);
            row=randomIntFromInterval(0,9);
            col=randomIntFromInterval(0,9);
        }

        for (let i = col; i < col + shipLength; i++) {
            console.log("Row: " + row + ", col: " + i);
            boardState[row][i] = 'bad';
        }
    } else {
        while (!checkValidRow(boardState, row, col, shipLength)) {
            console.log("check row: " + row + " col: " + col);
            row=randomIntFromInterval(0,9);
            col=randomIntFromInterval(0,9);
        }

        for (let i = row; i < row + shipLength; i++) {
            console.log("Row: " + i + ", col: " + col);
            boardState[i][col] = 'bad';
        }
    }
}

function generateGameBoard(){
    const defaultState= {board: [
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','']
    ], counter: 17}


    initShips(defaultState['board'], 5);
    initShips(defaultState['board'], 4);
    initShips(defaultState['board'], 3);
    initShips(defaultState['board'], 3);
    initShips(defaultState['board'], 2);
    
    return defaultState;
}

export default function gameReducer(state,action){

    if(state===undefined){
        return generateGameBoard()
    }
    if (action.type === 'boardClick') {
        const value = state['board'][action.x][action.y];
        if (value === '') {
            state['board'][action.x][action.y] = 'ul';
        } else if(value==='bad'){
            state['board'][action.x][action.y] = 'hit';
            state['counter']--;
        }

        return state;
    }
    if(action.type==='RESET'){
        return generateGameBoard()
    }
    return state;
}