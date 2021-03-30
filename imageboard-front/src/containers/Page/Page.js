import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import Layout from "../../components/Layout";
import Message from "../../components/Message";
import { fetchRequest } from "../../store/actionTypes";

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

  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  return (
    <Layout>

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
          <Form />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Page;
