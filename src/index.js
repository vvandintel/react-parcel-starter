import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { deepPurple, pink, red } from 'material-ui/colors'
import { createBrowserHistory } from 'history'
import './index.scss'
// import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/App/App'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    accent: pink,
    error: red,
    type: 'dark',
  },
})

// injectTapEventPlugin()

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <BrowserRouter history={createBrowserHistory()}>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
