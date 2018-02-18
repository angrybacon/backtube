import React from 'react';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Menu } from 'mdi-material-ui';

class Header extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item><IconButton color="inherit"><Menu /></IconButton></Grid>
            <Grid item><Typography color="inherit" variant="title">BackTube</Typography></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
