import makeStyles from "@material-ui/core/styles/makeStyles";

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
    },

    taskDone: {
        color: 'green',
    },

    taskList: {
        width: '600px',
        margin: '0 auto',
    }

});

export default useStyles;