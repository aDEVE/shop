import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getQuantities } from '../../reducers'

import { Container, Link } from './styles'

class Menu extends PureComponent {
  render() {
    const { quantities } = this.props
    const isNotEmpty = quantities > 0

    return (
      <Container>
        <Link className="product-link" to="/">Products</Link>
        <Link className="cart-link" to="/cart" style={{ marginLeft: '15px' }}>
          Cart {isNotEmpty && `( ${quantities} )`}
        </Link>
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

export default connect(mapStateToProps)(Menu)
