import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Form from './Form';
import List from './List';



const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid()
            }
        ])
    }

    const deletTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>ToDo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deletTodo={deletTodo} />
        </>
    )
}

export default App
