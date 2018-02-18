import React from 'react';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import { LinearProgress } from 'material-ui/Progress';
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

class PlayerProgress extends React.Component {

  state = {completed: 0};
  timer = null;

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    }
    else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    return (
      <div style={{position: 'relative'}}>
        <LinearProgress
          color="secondary"
          style={{left: 0, position: 'absolute', right: 0, top: 0}}
          value={this.state.completed}
          variant="determinate"
          />
      </div>
    );
  }
}

export default Player;
