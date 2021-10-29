function Modal(props) {
    return (
        <div className="modalBbl">
        <p className="modalText">Are you sure?</p>
        <button className="cancelBtn" onClick={props.onCancel}>Cancel</button>
        <button className="confirmBtn" onClick={props.onConfirm}>Confirm</button>
        </div>
    );
}

export default Modal;