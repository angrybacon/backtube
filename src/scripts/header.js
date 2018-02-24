import React from 'react';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { FormatListBulleted, Magnify, Settings } from 'mdi-material-ui';

const styles = theme => ({
  root: {
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
    return (
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography color="inherit" variant="title">BackTube</Typography>
            </Grid>
            <Grid item>
              <Tabs classes={classes}
                    onChange={this.changeTab}
                    value={this.state.currentTab}>
                <Tab classes={classes} icon={<Magnify />} value="search"></Tab>
                <Tab classes={classes} icon={<FormatListBulleted />} value="lists"></Tab>
                <Tab classes={classes} icon={<Settings />} value="settings"></Tab>
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
