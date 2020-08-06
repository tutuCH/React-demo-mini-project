import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
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

const Algorithm = () => {
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
          <Grid container spacing={4}>
              {/* card for sorting algorithm*/} 
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sorting Algorithm
                    </Typography>
                    <Typography>
                      Sorting Visualiser
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small"
                      color="primary"
                      href="/algorithm/sorting-algorithm"
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
                </Grid>

                {/* card for game 2048*/} 
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        2048
                      </Typography>
                      <Typography>
                        A repo of the popular game 2048
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small"
                        color="primary"
                        href="/algorithm/game-2048"
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                {/* card for tbc*/}
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        To be continued...
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
          </Grid>
        </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Algorithm;
