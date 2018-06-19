import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1em 0 2em'
  }
};

const LoadMore = ({ classes, onClick, offset }) => (
  <div className={classes.wrapper} onClick={() => onClick(offset)}>
    <Button size="small" color="primary">Load more</Button>
    <ArrowDownward />
  </div>
);

export default withStyles(styles)(LoadMore);
