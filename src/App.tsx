import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from "uuid";
import * as stream from "stream";

export type FilterValueType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ]);

    console.log(tasks)

    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    };

    function addTask() {
        let newTask = {id: v1(), title: "new Task", isDone: false}
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    };

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
};


export default App;
