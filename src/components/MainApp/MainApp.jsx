import React, { Component } from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import autoBind from 'react-autobind'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Home from '../Home/Home'
import About from '../About/About'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import TabContainer from '../TabContainer/TabContainer'

const styles = theme => ({
  root: {
    padding: 0,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    flex: 1,
    'justify-content': 'flex-end',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class MainApp extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = {
      value: 'one',
    }
  }

  handleChange (event, value) {
    this.setState({ value })
  };

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={classes.flex}>
              React + Parcel
            </Typography>
            <Tabs value={value} onChange={this.handleChange} className={classes.flex}>
              <Tab value='one' label='Home' />
              <Tab value='two' label='About' />
            </Tabs>
          </Toolbar>
        </AppBar>
        {value === 'one' && <TabContainer><Home /></TabContainer>}
        {value === 'two' && <TabContainer><About /></TabContainer>}
      </div>
    )
  }
}

MainApp.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainApp)
