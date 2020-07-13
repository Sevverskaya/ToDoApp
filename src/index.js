import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import TodoList from './TodoList';
import UseTodoState from './UseTodoState';

const App = () => {
    const { todos, addTodo, deleteTodo } = UseTodoState([]);

    return (
        <div className="App">
            <Typography color="primary" component="h1" variant="h2">
                ToDo List
            </Typography>

            <TodoForm
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();

                    if (trimmedText.length > 0) {
                        addTodo(trimmedText);
                    }
                }}
            />

            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
