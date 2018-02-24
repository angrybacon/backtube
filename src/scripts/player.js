import React from 'react';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import PlayerArt from './player.art';
import PlayerControls from './player.controls';
import PlayerProgress from './player.progress';

const styles = theme => ({
  positionFixed: {
    bottom: 0,
    top: 'auto'
  }
});

class Player extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar classes={{positionFixed: classes.positionFixed}} component="footer">
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

export default withStyles(styles)(Player);
