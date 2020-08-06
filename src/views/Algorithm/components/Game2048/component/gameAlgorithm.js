import React, { useState, useEffect } from 'react';
import {getMergeSortAnimations} from './sortingAlgorithms(v2)';
import './sortingVisualiser(v2).css';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
// eslint-disable-next-line
import { Grid, Typography, ThemeProvider } from '@material-ui/core';

// Change this value for the speed of the animations.
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 150;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const RANGE_OF_ARRAY = 300;

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

function SortingVisualizer(props) {

  const [array, setArray] = useState([])

  useEffect(() => {
    resetArray()
  },[])

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, RANGE_OF_ARRAY));
    }
    setArray(array);
  }

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  const quickSort = () => {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  const heapSort = () => {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  const bubbleSort = () => {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  // eslint-disable-next-line
  const testSortingAlgorithms = () => {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  // render() {
    //const {array} = array;
    const classes = useStyles();
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
        ></Grid>
        <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={12}>
        <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        </CardContent>
        
        <CardActions>
        <Button onClick={() => resetArray()}>Generate New Array</Button>
        <Button onClick={() => mergeSort()}>Merge Sort</Button>
        <Button onClick={() => quickSort()}>Quick Sort</Button>
        <Button onClick={() => heapSort()}>Heap Sort</Button>
        <Button onClick={() => bubbleSort()}>Bubble Sort</Button>
        {/* <button onClick={() => testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button> */}
        </CardActions>
        </Card>
        <Grid container spacing={12}>
        <div style={{marginTop:'2%'}} >
        <Typography>This algorithm visualiser is based on the tutorial on </Typography>
        <Typography><a href="https://www.youtube.com/watch?v=pFXYym4Wbkc&list=PLZzu81xXY9AsNLtmW7FkX1BrGnrYFCAMa&index=4&t=0s">https://www.youtube.com/watch?v=pFXYym4Wbkc&list=PLZzu81xXY9AsNLtmW7FkX1BrGnrYFCAMa&index=4&t=0s</a></Typography>
        </div>
        </Grid>
        </Grid>
        </Container>
        </Grid>
      </div>
    );
  }
//}


export default SortingVisualizer;