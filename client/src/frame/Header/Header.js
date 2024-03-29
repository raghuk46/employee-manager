import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {headerStyles} from '../../helpers/styles/styles';

const Header = props => {
  const {classes, onDrawerToggle} = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={8} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton color="inherit" aria-label="Open drawer" onClick={onDrawerToggle} className={classes.menuButton}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item xs>
              <Typography color="inherit" variant="h5">
                Authentication
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(headerStyles)(Header);
