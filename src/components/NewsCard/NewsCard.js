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
  link: {
    textDecoration: 'none'
  },
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
    const { classes, news, key, isExternal } = this.props;
    
    const url = `/article/${news.id}/${news.slug}`;
    const buttonComponent = <Button size="small" color="primary">Read More</Button>;

    const linkComponent = isExternal
      ? <a href={news.url} title={news.title} style={styles.link}>{buttonComponent}</a>
      : <Link to={url} style={styles.link}>{buttonComponent}</Link>

    const descriptionComponent = news.description
      ? <Typography paragraph>{news.description}</Typography>
      : null;

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
          {descriptionComponent}
          <CardActions>
            {linkComponent}
          </CardActions>
        </CardContent>
      </Card>
    );
  };
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired,
  isExternal: PropTypes.bool,
  key: PropTypes.number
};

export default withStyles(styles)(NewsCard);