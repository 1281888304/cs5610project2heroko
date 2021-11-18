import { useSelector } from "react-redux";
import { SingleBoard } from "./SingleBoard";
import { useParams } from 'react-router';
import './board.css'
import { SingleEnemyBoard } from "./singleEnemyBoard";
import ResetButton from './ResetButton';
import MyAlert from "./MyAlert";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import MyNavBar from "./MyNavBar";

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
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


export default function BattleShipBoard(){
    const state=useSelector((state)=> state.game) //user board state
    const boardComponent=[];//uer board
    const boardState = state['board']

    const enemyBoardState=useSelector((state)=>state.enemyGame)
    const enemyBoardComponent=[];//user board
    const gameType = useParams().gameType;
    let counter = 0;

    if(gameType==="normal"){
        for(let i=0;i<boardState.length;i++){
            let row=boardState[i];
            for(let j=0;j<row.length;j++){
                boardComponent.push((<SingleBoard symbol={boardState[i][j]} x={i} y={j} counter={state['counter']} type = {'hide'}/>))
            }
        }
        for(let i=0;i<enemyBoardState.length;i++){
            let row=enemyBoardState[i];
            for(let j=0;j<row.length;j++){
                if (enemyBoardState[i][j] === 'hit') {
                    counter++;
                    if (counter === 17) {
                        return (<MyAlert message="Computer wins!"/>);
                    }
                }
                enemyBoardComponent.push((<SingleEnemyBoard symbol={enemyBoardState[i][j]} x={i} y={j} />))
            }
        }
        return <div>
            <MyNavBar/>
            <div className="flexbox-container">
            <div className="flexbox-container2">
                <h2>BattleShip</h2>
                
                <h2>User</h2>
                <div id="battleShipBlock" >{boardComponent}</div>
            </div>
            <div className="flexbox-container3">
                <h2>Computer</h2>
                <div id="enemy">{enemyBoardComponent}</div>

            </div>
        
        </div>
            {/*<div id="b"><MyAlert show={true} /></div>*/}
        <div id="button"><ResetButton text="Reset, pls"/></div>
        </div>
    }else if (gameType==="free"){
        for(let i=0;i<boardState.length;i++){
            let row=boardState[i];
            for(let j=0;j<row.length;j++){
                boardComponent.push((<SingleBoard symbol={boardState[i][j]} x={i} y={j} counter={state['counter']} type = {'hide'}/>))
            }
        }
        return <div>
            <MyNavBar/>
            <div className="flexbox-container-free">
                <div id="battleShipBlock">{boardComponent}</div>
                <div id="button"><ResetButton text="Reset, pls"/></div>
            </div>
        </div>
    }   
}