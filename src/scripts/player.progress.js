import React from 'react';

import { LinearProgress } from 'material-ui/Progress';

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
    const { buffer, completed } = this.state;
    return (
      <div style={{position: 'relative'}}>
        <LinearProgress
          color="secondary"
          style={{left: 0, position: 'absolute', right: 0, top: 0}}
          value={completed}
          valueBuffer={buffer}
          variant="buffer"
          />
      </div>
    );
  }
}

export default PlayerProgress;
