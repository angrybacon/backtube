import React from 'react';

import { LinearProgress, withStyles } from 'material-ui';

const styles = {
  root: {
    height: 4,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  dashed: {
    display: 'none'
  }
};

class PlayerProgress extends React.Component {

  state = {buffer: 10, completed: 0};

  timer = null;
  componentDidMount() { this.timer = setInterval(this.progress, 500); }
  componentWillUnmount() { clearInterval(this.timer); }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ buffer: 10, completed: 0 });
    }
    else {
      const a = Math.random() * 10;
      const b = Math.random() * 10;
      this.setState({ buffer: completed + a + b, completed: completed + a});
    }
  };

  render() {
    const { classes } = this.props;
    const { buffer, completed } = this.state;
    return (
      <div style={{position: 'relative'}}>
        <LinearProgress
          classes={classes}
          color="secondary"
          value={completed}
          valueBuffer={buffer}
          variant="buffer"
          />
      </div>
    );
  }
}

export default withStyles(styles)(PlayerProgress);
