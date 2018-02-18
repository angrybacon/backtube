import React from 'react';
import { render } from 'react-dom';

import Header from './scripts/header';
import Player from './scripts/player';

import 'typeface-roboto';
import './index.css';

function Popin() {
  return (
    <div>
      <Header />
      <Player />
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  render(<Popin />, root);
}
