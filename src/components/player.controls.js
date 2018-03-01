import React from 'react';

import { IconButton } from 'material-ui';
import { Play, SkipNext, SkipPrevious } from 'mdi-material-ui';

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

export default PlayerControls;
