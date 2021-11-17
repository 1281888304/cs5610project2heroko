import React from 'react';
import { useDispatch } from 'react-redux';
import './board.css'

export default function ResetButton(props) {
    const { text } = props;

    const dispatch = useDispatch();

    return (
        <button class="resetButton" onClick={
            () => dispatch({
                type: "RESET",
            })
        }>
            {text}
        </button>
    )
}