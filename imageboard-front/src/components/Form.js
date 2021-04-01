import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import FileInput from "./UI/FileInput";

const useStyles = makeStyles({
  text: {
    margin: "10px 0",
  },
  submitBtn: {
    marginTop: 20,
  },
});
const Form = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({
    author: "",
    message: "",
    image: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const fileChangeHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    setData((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    props.submit(formData);
    setData({
      author: "",
      message: "",
      image: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <FormControl fullWidth>
        <TextField
          className={classes.text}
          variant='outlined'
          label='Author'
          name='author'
          value={data.author}
          onChange={changeHandler}
        />
        <TextField
          className={classes.text}
          variant='outlined'
          label='Message'
          name='message'
          value={data.message}
          onChange={changeHandler}
        />
        <FileInput name='image' label='Image' onChange={fileChangeHandler} />
      </FormControl>
      <Button
        color='primary'
        variant='contained'
        type='submit'
        className={classes.submitBtn}>
        SEND
      </Button>
    </form>
  );
};

export default Form;
