import React from 'react';
import { render } from 'react-dom';

import { Grid } from 'material-ui';

import { Header, Player } from './components';

import 'typeface-roboto';
import './index.css';

function Popin() {
  return (
    <Grid container direction="column" spacing={0} style={{minWidth: 400}} wrap="nowrap">
      <Grid item component="header"><Header /></Grid>
      <Grid item style={{flexShrink: 1, height: '100%', overflowY: 'auto'}}></Grid>
      <Grid item component="footer"><Player /></Grid>
    </Grid>
  );
}

const root = document.getElementById('root');
if (root) {
  render(<Popin />, root);
}
