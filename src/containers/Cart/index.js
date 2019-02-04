import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { clearCart, deleteItemCart } from '../../actions'
import { getCartProducts, getTotal } from '../../reducers'
import Empty from './components/Empty'
import Card from './components/Card'

class Cart extends Component {
  handleClickClear = () => {
    const { clearCart } = this.props
    clearCart()
  }

  handleClickDeleteItem = id => {
    const { deleteItemCart } = this.props
    deleteItemCart(id)
  }

  render() {
    const { products, total} = this.props
    const hasProduct = !isEmpty(products)

    return (
      <div>
        {!hasProduct && <Empty />}
        {products.map(p => (
        <Card
          key={p.name}
          description={p.description}
          name={p.name}
          img={p.img}
          onClick={() =>this.handleClickDeleteItem(p.id)}
          price={p.price}
          quantity={p.quantity}
        />
        ))}
        {hasProduct && <span>TOTAL : {total} </span> }
        {hasProduct && (
          <button onClick={this.handleClickClear} type="button">
            Clear Cart
          </button>
        )}
      </div>
    )
  }
}

Cart.propTypes = {
  clearCart: PropTypes.func.isRequired,
  deleteItemCart: PropTypes.func.isRequired,
  products: PropTypes.object,
  total: PropTypes.string,
}

Cart.defaultProps = {
  products: {},
  total: null,
}

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { clearCart, deleteItemCart },
)(Cart)
