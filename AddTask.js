import { useRef } from "react";

function AddTask(props) {

    const taskTitle = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.AddNewTask(taskTitle.current.value);
        taskTitle.current.value='';
    }

    return (
        <div className="addTask">
            <form id="addTask" onSubmit={handleSubmit} autoComplete="off">
                <input type="text" id="taskTitle" placeholder="Add a Task..." ref={taskTitle} />
                <button className="addBtn">Add</button>
            </form>
        </div>
    );
}

export default AddTask;