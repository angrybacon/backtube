import React from 'react';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import PlayerArt from './player.art';
import PlayerControls from './player.controls';
import PlayerProgress from './player.progress';

class Player extends React.Component {
  render() {
    return (
      <AppBar component="div" position="static">
        <Toolbar disableGutters>
          <Grid container alignItems="center" spacing={0}>
            <Grid item className="player-art" style={{height: 64}}><PlayerArt /></Grid>
            <Grid item style={{flexGrow: 1}}>
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Player;
