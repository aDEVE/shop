import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Cart from './containers/Cart'
import Products from './containers/Products'
import Menu from './components/Menu'

// Reset native browser css.
const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: none;
    outline: none;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Menu />
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
          </Fragment>
        </Router>
        <ResetCSS />
      </Fragment>
    )
  }
}

export default App
