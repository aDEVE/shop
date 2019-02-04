import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getQuantities } from '../../reducers'

import { Container } from './styles'

class Menu extends PureComponent {
  render() {
    const { quantities } = this.props
    const isNotEmpty = quantities > 0

    return (
      <Container>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart {isNotEmpty && `( ${quantities} )`}</Link>
      </Container>
    )
  }
}

Menu.propTypes = {
  quantities: PropTypes.number,
}

Menu.defaultProps = {
  quantities: 0,
}

const mapStateToProps = state => ({
  quantities: getQuantities(state),
})

export default connect(
  mapStateToProps,
)(Menu)
