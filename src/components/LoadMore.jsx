import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const styles = {
  root: {
    flexGrow: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1em 0 2em'
  }
};

class LoadMore extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  
  render() {
    const { classes, onClick, offset, isVisible } = this.props;

    return isVisible ? (
      <div className={classes.root}>
        <div className={classes.wrapper} onClick={() => onClick(offset)}>
          <Button size="small" color="primary">Load more</Button>
          <ArrowDownward />
        </div>          
      </div>
    ) : null;
  };
}

LoadMore.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default withStyles(styles)(LoadMore);
