import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { clearCart, deleteItemCart } from '../../actions'
import { getCartProducts, getTotal } from '../../reducers'
import { Text, Title } from '../../components/Typographies'
import Button from '../../components/Button'
import Empty from './components/Empty'
import Card from './components/Card'
import { WrapperBottom } from './styles'

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
    const { products, total } = this.props
    const hasProduct = !isEmpty(products)

    return (
      <div>
        <Title>Your Cart</Title>
        {!hasProduct && <Empty />}
        {products.map(p => (
          <Card
            className="item-cart"
            key={p.name}
            description={p.description}
            name={p.name}
            img={p.img}
            onClick={() => this.handleClickDeleteItem(p.id)}
            price={p.price}
            quantity={p.quantity}
          />
        ))}
        <WrapperBottom>
          {hasProduct && <Text>TOTAL : {total} </Text>}
          {hasProduct && <Button className="clear-cart" onClick={this.handleClickClear}>Clear Cart</Button>}
        </WrapperBottom>
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
  total: getTotal(state),
})

export default connect(
  mapStateToProps,
  { clearCart, deleteItemCart },
)(Cart)
