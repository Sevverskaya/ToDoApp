import React, {useCallback} from 'react';
import './index.css';
import TodoForm from './components/TodoForm';
import Typography from "@material-ui/core/Typography";
import TodoList from './components/TodoList';
import UseTodoState from './UseTodoState';

const App = () => {
    const { todos, addTodo, deleteTodo } = UseTodoState([]);
    const saveTodo = useCallback((todoText) => {
        const trimmedText = todoText.trim();

        if (trimmedText.length > 0) {
            addTodo(trimmedText);
        }
    });

    return (
        <div className="App">
            <Typography color="primary" component="h1" variant="h2">
                ToDo List
            </Typography>

            <TodoForm saveTodo={saveTodo}/>

            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;