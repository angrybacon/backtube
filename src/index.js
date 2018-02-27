import React from 'react';
import { render } from 'react-dom';
import Grid from 'material-ui/Grid';

import Header from './scripts/header';
import Player from './scripts/player';

import 'typeface-roboto';
import './index.css';

function Popin() {
  return (
    <Grid container direction="column" spacing={0} wrap="nowrap">
      <Grid item component="header"><Header /></Grid>
      <Grid item style={{overflowY: 'auto', flexShrink: 1}}></Grid>
      <Grid item component="footer"><Player /></Grid>
    </Grid>
  );
}

const root = document.getElementById('root');
if (root) {
  render(<Popin />, root);
}
