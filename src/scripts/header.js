import React from 'react';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { FormatListBulleted, Magnify, Settings } from 'mdi-material-ui';

class Header extends React.Component {

  state = {currentTab: 'search'};

  changeTab = (event, value) => {
    this.setState({currentTab: value});
  };

  render() {
    return (
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography color="inherit" variant="title">BackTube</Typography>
            </Grid>
            <Grid item>
              <Tabs onChange={this.changeTab} value={this.state.currentTab}>
                <Tab icon={<Magnify />} value="search"></Tab>
                <Tab icon={<FormatListBulleted />} value="lists"></Tab>
                <Tab icon={<Settings />} value="settings"></Tab>
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
