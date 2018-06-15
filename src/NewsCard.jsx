import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const DEFAULT_IMAGE = 'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg';

const styles = {
  card: {
    width: '100%',
    maxWidth: 500,
    minWidth: 200,
    margin: '1rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class NewsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { classes, news, key } = this.props;

    const url = `/article/${news.id}/${news.slug}`

    return (
      <Card className={classes.card} key={key}>
        <CardMedia
          className={classes.media}
          image={news.imageUrl || DEFAULT_IMAGE}
          title={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {news.title}
          </Typography>
          <CardActions>
            <Button size="small" color="primary" component={Link} to={url}>
              Read More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  };
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired,
  style: PropTypes.object,
  key: PropTypes.number
};

export default withStyles(styles)(NewsCard);