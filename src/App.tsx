import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

function App() {

    let tasks: Array<TasksType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks} />
        </div>
    );
}


export default App;
