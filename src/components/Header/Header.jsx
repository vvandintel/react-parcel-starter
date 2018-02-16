import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import './Header.scss'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const Header = props => {
  const { classes } = props
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
          <NavLink to='/home' style={{ textDecoration: 'none' }}>
            <Button variant='flat'>
              <Typography variant='title' color='inherit' className={classes.flex}>
              Home
              </Typography>
            </Button>
          </NavLink>
          <NavLink to='/about' style={{ textDecoration: 'none' }}>
            <Button variant='flat'>
              <Typography variant='title' color='inherit' className={classes.flex}>
              About
              </Typography>
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
