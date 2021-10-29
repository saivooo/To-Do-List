import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

function Task(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [taskDelete, confirmTaskDelete] = useState(false);

    function handleDelete() {
        setModalOpen(true);
        confirmTaskDelete(true);
    }

    function handleCloseModal() {
        confirmTaskDelete(false);
        setModalOpen(false);

    }

    const handleConfirmDelete = () => {
        props.delete();
        setModalOpen(false);
        confirmTaskDelete(false);
    }

    const handleComplete = (e) => {
        const toDoName = e.target.parentElement.previousElementSibling;
        toDoName.className = 'taskTitleCompleted';
        console.log(e);
        console.log('clicked');
    }

    const handleEdit = (e) => {
        
    }

    return (
        <div className="individualTask">
            <li>
                <h2 className="taskTitle">{props.text}</h2>
                <div className="actions">
                    <CheckIcon onClick={handleComplete} />
                    <EditIcon onClick={handleEdit} />
                    <DeleteForeverTwoToneIcon onClick={() => { handleDelete() }} />
                </div>
            </li>
            {modalOpen && <Modal onCancel={handleCloseModal} />}
            {modalOpen && <Backdrop onCancel={handleCloseModal} />}
            {taskDelete && <Modal onCancel={handleCloseModal} onConfirm={() => { handleConfirmDelete(props.key) }} />}
        </div>
    );
}

export default Task;