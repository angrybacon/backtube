import React from 'react';

import { AppBar, Grid, Tab, Tabs, Toolbar, Typography, withStyles } from 'material-ui';
import { FormatListBulleted, Magnify, Settings } from 'mdi-material-ui';

const styles = theme => ({
  fillY: {
    ...theme.mixins.toolbar
  }
});

class Header extends React.Component {

  state = {currentTab: 'search'};

  changeTab = (event, value) => {
    this.setState({currentTab: value});
  };

  render() {
    const { classes } = this.props;
    let { currentTab } = this.state;
    return (
      <AppBar component="div" position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography color="inherit" variant="title">BackTube</Typography>
            </Grid>
            <Grid item>
              <Tabs classes={{root: classes.fillY}} onChange={this.changeTab} value={currentTab}>
                <Tab classes={{root: classes.fillY}} icon={<Magnify />} value="search"></Tab>
                <Tab classes={{root: classes.fillY}} icon={<FormatListBulleted />} value="lists"></Tab>
                <Tab classes={{root: classes.fillY}} icon={<Settings />} value="settings"></Tab>
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
