import React from 'react';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import PlayerArt from './player.art';
import PlayerControls from './player.controls';
import PlayerProgress from './player.progress';

class Player extends React.Component {
  render() {

    const styles = {
      bottom: 0,
      flexDirection: 'row',
      top: 'auto'
    };

    return (
      <AppBar className="player" component="footer" style={styles}>
        <Grid container spacing={0}>

          <Grid item>
            <PlayerArt />
          </Grid>

          <Grid item style={{flexGrow: 1}}>
            <PlayerProgress/>
            <Grid container alignItems="center" justify="space-between" style={{padding: 8}}>
              <Grid item>
                <Typography color="inherit">Track Name</Typography>
                <Typography color="inherit" variant="caption">Album</Typography>
                <Typography color="inherit" variant="caption">Artist</Typography>
              </Grid>
              <Grid item>
                <PlayerControls />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

export default Player;
