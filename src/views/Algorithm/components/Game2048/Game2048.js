import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import KeyboardEventHandler from 'react-keyboard-event-handler';
// eslint-disable-next-line
import { Grid, Typography } from '@material-ui/core';
import reactKeyboardEventHandler from 'react-keyboard-event-handler';

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



const Game2048 = () => {
  const classes = useStyles();
  const grid = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];

  const addNumber = () => {
    let options = [];
    for (let i = 0; i < 4; i++){
      for (let j = 0; j < 4; j++){
        if (grid[i][j] === 0){
          options.push({
            x: i,
            y: j
          });
        }
      }
    }
    if (options.length > 0);
     //randomly select cell to add number
     let spot = options[Object.keys(options)[Math.floor(Math.random()*Object.keys(options).length)]];
     let r = Math.random(1);
     grid[spot.x][spot.y] = r > 0.75 ? 4 : 2;
    //  console.table(grid);
  }


  const slideLeft = (row) => {
    for (let i = 0; i < 4; i++){
      for(let j = 1; j < 4; j++){
        let tmp = j;
        while(grid[i][tmp] !== 0 && grid[i][tmp-1]===0 && tmp-1 >= 0){
          grid[i][tmp-1] = grid[i][tmp];
          grid[i][tmp] = 0;
          tmp--;
        }
        if(grid[i][tmp] !== 0 && grid[i][tmp-1]===grid[i][tmp] && tmp-1 >= 0){
          grid[i][tmp-1] = grid[i][tmp] + grid[i][tmp-1];
          grid[i][tmp] = 0;
          tmp--;
        }
       
      }
    }
    console.table(grid);
    addNumber()
  }

  const slideRight = (row) => {
    for (let i = 0; i<4; i++){
      for(let j = 2; j >= 0; j--){
        let tmp = j;
        while(grid[i][tmp] !== 0 && grid[i][tmp+1]===0 && tmp+1 <= 3){
          grid[i][tmp+1] = grid[i][tmp];
          grid[i][tmp] = 0
          tmp++;
        }
        if(grid[i][tmp] !== 0 && grid[i][tmp+1]===grid[i][tmp] && tmp+1 <= 3){
          grid[i][tmp+1] = grid[i][tmp] + grid[i][tmp+1];
          grid[i][tmp] = 0;
          //slideRight();
        }
      }
    }
    console.table(grid);
    addNumber()
  }

  const slideUp = (row) => {
    for(let j = 0; j < 4; j++){
      for(let i = 1; i < 4; i++){
        let tmp = i;
        try{
          while(grid[tmp][j] !== 0 && grid[tmp-1][j]===0 && tmp-1 >= 0){
            grid[tmp-1][j] = grid[tmp][j];
            grid[tmp][j] = 0;
            tmp--;
          }
          if(grid[tmp][j] !== 0 && grid[tmp-1][j]===grid[tmp][j] && tmp-1 >= 0){
            grid[tmp-1][j] = grid[tmp][j] + grid[tmp-1][j];
            grid[tmp][j] = 0;
            tmp--;
          }
        }catch(err){
          //console.log('err sliding up:');
        }
      }
    }
    console.table(grid);
    addNumber()
  }

  const slideDown = (row) => {
    for(let j = 0; j < 4; j++){
      for(let i = 2; i>=0 ; i--){
        let tmp = i;
        try{
          while(grid[tmp][j] !== 0 && grid[tmp+1][j]===0 && tmp+1 <= 3){
            grid[tmp+1][j] = grid[tmp][j];
            grid[tmp][j] = 0
            tmp++;
          }
          if(grid[tmp][j] !== 0 && grid[tmp+1][j]===grid[tmp][j] && tmp+1 <= 3){
            grid[tmp+1][j] = grid[tmp+1][j] + grid[tmp][j];
            grid[tmp][j] = 0;
            tmp++;
          }
        }catch{
        }
      }
    }
    console.table(grid);
    addNumber()
  }

  //console.table(grid);
  // for(let i =0; i< 6; i++){
  //   addNumber();
  // }
  let endgame = 0
  addNumber();
  // addNumber();
  // addNumber();
  // addNumber();
  console.table(grid);
  // slideRight();
  // console.table(grid);
  // slideLeft();
  // console.table(grid);
  // slideUp();
  // console.table(grid);
  // slideDown();
  //console.table(grid);

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={10}
      >
        <Grid
          item
          lg={12}
          xs={12}
        >

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item xs={12} sm={12} lg={12} xl={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                  {/* <div>key detected: {props.eventKey}</div> */}
                  <KeyboardEventHandler
                    handleKeys={['left']}
                    onKeyEvent={(key, e) => slideLeft()}
                    // onKeyEvent={console.log(`do something upon keydown event of ${key}`)}
                  >
                  </KeyboardEventHandler>
                  <KeyboardEventHandler
                    handleKeys={['right']}
                    onKeyEvent={(key, e) => slideRight()}
                    // onKeyEvent={console.log(`do something upon keydown event of ${key}`)}
                  >
                  </KeyboardEventHandler>
                  <KeyboardEventHandler
                    handleKeys={['up']}
                    onKeyEvent={(key, e) => slideUp()}
                    // onKeyEvent={console.log(`do something upon keydown event of ${key}`)}
                  >
                  </KeyboardEventHandler>
                  <KeyboardEventHandler
                    handleKeys={['down']}
                    onKeyEvent={(key, e) => slideDown()}
                    // onKeyEvent={console.log(`do something upon keydown event of ${key}`)}
                  >
                  </KeyboardEventHandler>
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

export default Game2048;