import React from 'react';
import List from '@material-ui/core/List';
import useStyles from "./UseStyles";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
    const classes = useStyles();
    return (
        <List className={classes.taskList}>
            {todos.map((todo, index) => (
                <TodoItem key={index.toString()} todo={todo} index={index} deleteTodo={deleteTodo} />
            ))}
        </List>
    );
};

export default TodoList;