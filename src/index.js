import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { deepPurple, pink } from 'material-ui/colors'
import './index.scss'
// import injectTapEventPlugin from 'react-tap-event-plugin'
import Routes from './components/Routes/Routes'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    type: 'light',
  },
})

// injectTapEventPlugin()

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
