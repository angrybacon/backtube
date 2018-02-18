import React from 'react';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Play, SkipNext, SkipPrevious } from 'mdi-material-ui';

class Player extends React.Component {
  render() {

    const styles = {
      bottom: 0,
      flexDirection: 'row',
      top: 'auto'
    };

    return (
      <AppBar className="player" component="div" style={styles}>
        <PlayerArt />
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Toolbar>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <Typography color="inherit">Track Name</Typography>
                  <Typography color="inherit" variant="caption">Album</Typography>
                  <Typography color="inherit" variant="caption">Artist</Typography>
                </Grid>
                <Grid item>
                  <PlayerControls />
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

class PlayerArt extends React.Component {
  render() {
    return (
      <div className="player-art">
        <img className="player-art-image" alt="" src="https://placecage.com/250/150" />
      </div>
    );
  }
}

class PlayerControls extends React.Component {
  render() {
    return (
      <div>
        <IconButton color="inherit"><SkipPrevious /></IconButton>
        <IconButton color="inherit"><Play /></IconButton>
        <IconButton color="inherit"><SkipNext /></IconButton>
      </div>
    );
  }
}

export default Player;
