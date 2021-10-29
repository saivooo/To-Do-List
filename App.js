// import Task from './components/Task';
import './index.css';
import AddTask from './components/AddTask';
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const AddNewTask = (taskTitle) => {
    const newList = list.concat({
      id: list.length + 1,
      title: taskTitle
    })

    setList(newList);
  }

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const renderTasks = (taskList) => {
    return taskList.map((item) => {
      return <Task key={item.id} text={item.title} delete={() => { deleteTask(item.id) }}/>
    })
  }

  return (
    <div className="App">
      <h1 className="mainHeader">Upcoming Tasks/Responsibilities</h1>
      <AddTask AddNewTask={AddNewTask} />
      <div className="taskBubble">
        <ul>
          {renderTasks(list)}
        </ul>
      </div>
    </div>
  );
}

export default App;
