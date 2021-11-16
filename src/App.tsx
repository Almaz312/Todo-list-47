import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

function App() {

    const tasks: Array<TasksType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]

    function removeTask(id: number) {
        const resultTask = tasks.filter(t => t.id !== id)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}


export default App;
