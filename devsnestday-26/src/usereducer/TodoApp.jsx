import React, { useReducer, useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';


const taskReducer = (tasks, action) => {
    if(action.type === 'add'){
        return [
            ...tasks,
            {
                id : action.id,
                text : action.text,
                done : false
            }
        ]
    }else if(action.type === 'edit'){
        return tasks.map(task => {
            if(task.id === action.task.id){
                return action.task
            }else{
                return task
            }
        })
    }else if(action.type === 'delete'){
        return tasks.filter(task => task.id !== action.id)
    }else{
        throw Error('Unknown action: ' + action.type);
    }
    
}

const TodoApp = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    const handleAddTodo = (text) => {
        dispatch({
            type : 'add',
            text : text,
            id : nextId++
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type : 'edit',
            task : task
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type : 'delete',
            id : taskId
        })
    }

    return (
        <div>
            <h1>2do-2do</h1>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList 
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    )
    
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'CSS BEM Methodology', done: true },
  { id: 1, text: 'Read useReducer Docs', done: false },
  { id: 2, text: 'JavaScript Web API', done: false }
];


export default TodoApp