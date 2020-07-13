import React from 'react';
import TextField from '@material-ui/core/TextField';
import UseInputState from './UseInputState';
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles ({
    myForm: {
        width: '550px',
        textAlign: 'center',
        margin: '0 auto',
    },
    addingTask: {
        width: '90%',
    },

    addingButton: {
        float: 'right',
        marginTop: '4%',
    }

});

const TodoForm = ({ saveTodo }) => {
    const { inputValue, reset, onChange } = UseInputState();
    const classes = useStyles();
    return (
        <form className={classes.myForm}
            onSubmit={event => {
                event.preventDefault();
                saveTodo(inputValue);
                reset();
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
