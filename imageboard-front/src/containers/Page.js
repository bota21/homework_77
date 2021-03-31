import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Message from "../components/Message";
import Spinner from "../components/UI/Spinner";
import { fetchRequest, sendRequest } from "../store/actions";

const useStyles = makeStyles({
  gridItem: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const Page = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  const submitMessage = async (data) => {
    await dispatch(sendRequest(data));
    dispatch(fetchRequest());
  };
  return (
    <Layout>
      {loading ? <Spinner /> : null}
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}>
          {messages.map((item) => {
            return (
              <Message
                key={item.id}
                author={item.author}
                message={item.message}
                image={item.image}
              />
            );
          })}
        </Grid>

        <Grid item xs={12}>
          <Form submit={submitMessage} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Page;
