import React from 'react';

import { AppBar, Grid, Toolbar, Typography } from 'material-ui';

import { PlayerControls, PlayerProgress } from '.';

class Player extends React.Component {
  render() {
    return (
      <AppBar component="div" position="static">
        <PlayerProgress/>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography color="inherit">Track Name - Artist</Typography>
            </Grid>
            <Grid item>
              <PlayerControls />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Player;
