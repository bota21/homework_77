import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import imageUrl from "../imageUrl";

const useStyles = makeStyles({
  msgCard: {
    width: "300px",
    margin: 50,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  author: {
    fontSize: 24,
    color: "blue",
  },
});

const Message = ({ author, image, message }) => {
  const classes = useStyles();

  const cardImage = imageUrl.apiUrl + image;

  return (
    <Card className={classes.msgCard}>
      <CardMedia image={cardImage} title={author} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.author}>{author}</Typography>
        <Typography>{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
