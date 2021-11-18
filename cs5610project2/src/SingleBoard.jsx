import { useDispatch } from "react-redux";
import './SingleBoard.css'
import MyAlert from "./MyAlert";

export function SingleBoard(props){
    const symbol=props.symbol;
    const type = props.type;

    let blockStyle='blue';
    if(symbol==='' || symbol==='bad' || symbol==='0'){
        blockStyle='blue';
    }
    else if(symbol==='ul'){ //user miss the ship,user lucky
        blockStyle='cross';
    }
    else if(symbol==='hit'){
        blockStyle='el';
    }else if (symbol==='enemyLucky'){ //enemy miss the ship,emey lucky
        blockStyle='lucky';
    }

    const dispatch=useDispatch();
    if (symbol === 'hit') {

        if (props.counter === 0) {
            return (
                <div id="b"><MyAlert message = "Player wins!" /></div>);
        }

        return (
            <div id="singleBoard" className={blockStyle}>
            {"\u{2713}"}
        </div>);
    }

    if (symbol === 'ul') {
        return (<div id="singleBoard" className={blockStyle}>
            {"X"}
        </div>);
    }

    if (symbol === 'bad') {

        if (type === 'hide') {
            return (<div onClick={() => dispatch(
                {
                    type: 'boardClick',
                    x: props.x,
                    y: props.y,
                }
            )}id="singleBoard" className={blockStyle}>
                {}
            </div>);
        }

        return (<div onClick={() => dispatch(
            {
                type: 'boardClick',
                x: props.x,
                y: props.y,
            }
        )} id="singleBoard" id="singleBoard" className={blockStyle}>
            {}
            <div id={"dot"} className={"dot"}>
            </div>
        </div>);
    }


    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        }
    )} id="singleBoard" className={blockStyle}>
        {symbol}
    </div>);

}