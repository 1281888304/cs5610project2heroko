import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import {useDispatch} from "react-redux";


export default function MyAlert(props) {
    const message = props.message;
    const [show, setShow] = useState(true);
    const dispatch=useDispatch();
    const handleClose = () => {
        setShow(false);
        dispatch({
            type: "RESET",
        });
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Over</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Reset
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}