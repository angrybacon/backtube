import React from 'react';

import { LinearProgress } from 'material-ui/Progress';

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

export default PlayerProgress;
