import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
  // eslint-disable-next-line
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Avatar,
  Grid,
  Typography,
  Divider,
  Button,
  LinearProgress,
  Container
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    border: '0px solid #92A6B6',
    marginTop: '-8%',
    marginLeft: '42%',
    height: 125,
    width: 125,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  cardMedia: {
    paddingTop: '30%', // 24:9
  },
}));

const AccountProfile = props => {
  const classes = useStyles();

  const user = {
    name: 'Harry Tu',
    city: 'Hong Kong/ Taiwan',
    country: 'Hong Kong',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar.jpg',
    selfIntro: 'Final Year Computer Science Student',
    school: 'The Chinese University of Hong Kong'
  };

  return (
    <Grid
    container
    justify="center"
    spacing={4}
    >
    <Container className={classes.cardGrid} maxWidth="md">
    <Card
      className={(classes.card)}
    >                  
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent>
        <div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
        </div>
        <div className={classes.details}>
          <div>
              <Typography
                gutterBottom
                variant="h2"
                color="#0A3659"
              >
                Harry Tu
              </Typography>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body2"
              >
                {user.city}
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                {user.selfIntro}
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                {user.school}
              </Typography>
          </div>
        </div>
      </CardContent>
    </Card>



    <Card
      className={(classes.card)}
      style={{marginTop:'3%'}}
    >     
      <CardContent>
        <div className={classes.details}>
          <div>
              <Typography
                className={classes.locationText}
                variant="h3"
              >
                Experience
              </Typography>
              <Typography
                className={classes.locationText}
                variant="body1"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              
          </div>
        </div>
      </CardContent>
      
    </Card>
    </Container>
    </Grid>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
