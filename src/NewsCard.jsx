import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography
} from '@material-ui/core';

const DEFAULT_IMAGE = 'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class NewsCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState({expanded: !this.state.expanded });
  };

  render() {
    const { classes, news, key } = this.props;

    return (
      <div key={key}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={news.imageUrl || DEFAULT_IMAGE}
            title={news.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {news.title}
            </Typography>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <Typography paragraph>
                {news.description}
              </Typography>
            </Collapse>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={this.handleExpandClick}>
              Read More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);