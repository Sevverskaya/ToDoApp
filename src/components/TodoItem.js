import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import useStyles from "./UseStyles";

const TodoItem = ({ index, todo, deleteTodo}) => {
    const classes = useStyles();
    return (
        <ListItem key={index.toString()} dense button>
            <Checkbox className={classes.taskDone} tabIndex={-1} disableRipple/>
            <ListItemText primary={todo}/>
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                    onClick={() => deleteTodo(index)}
                >
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default TodoItem;