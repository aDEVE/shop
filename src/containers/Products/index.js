import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import { getVisibleProducts } from '../../reducers/products'
import Card from '../../components/Card'
import Wrapper from './styles/Wrapper'

class Products extends Component {

  handleClick = id => {
    const { addToCart } = this.props
    addToCart && addToCart(id)
  }

  render() {
    const { products } = this.props

    return (
      <Fragment>
        LIST OF PRODUCT
        <Wrapper>
          {products &&
            products.map(p => {
              return (
                <Card
                  key={p.name}
                  img={p.img}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  onClick={() => this.handleClick(p.id)}
                />
              )
            })}
        </Wrapper>
      </Fragment>
    )
  }
}

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.object,
}

Products.defaultProps = {
  products: {},
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
})

export default connect(
  mapStateToProps,
  { addToCart },
)(Products)
