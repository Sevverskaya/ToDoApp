import React, {useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import UseInputState from '../UseInputState';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import useStyles from './UseStyles';

const TodoForm = ({ saveTodo }) => {
    const { inputValue, reset, onChange } = UseInputState();
    const classes = useStyles();

    function addTask() {
        saveTodo(inputValue);
        reset();
    }

    return (
        <form className={classes.myForm}
            onSubmit={event => {
                event.preventDefault();
                addTask();
            }}
        >
            <TextField className={classes.addingTask}
                       variant="filled"
                       placeholder="Add a task"
                       margin="normal"
                       onChange={onChange}
                       value={inputValue}
            />

            <div className={classes.addingButton}>
                <IconButton type={onsubmit} >
                    <AddIcon/>
                </IconButton>
            </div>
        </form>
    );
};

export default TodoForm;
