import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Bar(props) {
  const { classes, location } = props;

  const showNavigationButton = location.pathname !== '/';
  const navigationButton = showNavigationButton
    ? (<IconButton
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
      component={Link} to="/">
        <ArrowBackIcon />
      </IconButton>)
    : null;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {navigationButton}
          <Typography variant="title" color="inherit" className={classes.flex}>
            Fashion News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Bar));
