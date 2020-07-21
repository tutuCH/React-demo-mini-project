import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
// eslint-disable-next-line
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [1, 2, 3];

const HelloWorld = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={12}
          xs={12}
        >

<Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
              {/* <Grid item key={card} xs={12} sm={6} lg={4} xl={4}> */}
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"
                    href="https://www.google.com/">
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
          {/* <div className={classes.content}>

          </div> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default HelloWorld;