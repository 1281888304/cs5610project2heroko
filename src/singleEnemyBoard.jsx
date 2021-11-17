import { useDispatch } from "react-redux";
import './SingleBoard.css'
import MyAlert from "./MyAlert";

export function SingleEnemyBoard(props){
    const symbol=props.symbol;
    let blockStyle='blue';
    if(symbol==='0' || symbol === 'bad'){
        blockStyle='blue';
    }

    else if(symbol==='el'){ //enemy miss the ship,user lucky
        blockStyle='mark';
    }
    else if(symbol==='hit'){
        blockStyle='cross';
    }

    if (symbol === 'bad') {
        return (<div id="singleBoard" className={blockStyle}>
            {}
            <div id={"dot"} className ={"dot"}>

            </div>
        </div>)
    }

    if (symbol === 'hit') {
        return (<div id="singleBoard" className={blockStyle}>
            {"X"}
        </div>)
    }

    if (symbol === 'el') {
        return (<div id="singleBoard" className={blockStyle}>
            {"X"}
        </div>)
    }

    return (<div id="singleBoard" className={blockStyle}>
        {}
    </div>);

}
