import { AppBar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    padding: "10px 20px",
  },
  wrapper: {
      padding: '20px 50px'
  }
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='static' className={classes.appBar}>
        <Typography>Image Board</Typography>
      </AppBar>
      <div className={classes.wrapper}>{children}</div>
    </>
  );
};
export default Layout;
