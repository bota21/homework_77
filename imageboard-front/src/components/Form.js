import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
    text: {
        margin: '10px 0'
    }
})
const Form = ({ change, submit }) => {
    const classes = useStyles();

  return (
    <form onSubmit={submit}>
      <FormControl fullWidth>
        <TextField
        className={classes.text}
          variant='outlined'
          label='Author'
          name='author'
          onChange={change}
        />
        <TextField
        className={classes.text}
          variant='outlined'
          label='Message'
          name='message'
          onChange={change}
        />
        <TextField
        className={classes.text}
          variant='outlined'
          label='Image'
          name='image'
          onChange={change}
        />
      </FormControl>
      <Button color='primary' variant='contained'>SEND</Button>
    </form>
  );
};

export default Form;
