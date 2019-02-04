import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import { getVisibleProducts } from '../../reducers/products'
import { Title } from '../../components/Typographies'
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
        <Title>LIST OF PRODUCT</Title>
        <Wrapper>
          {products &&
            products.map(p => {
              return (
                <Card
                  description={p.description}
                  id={p.id}
                  img={p.img}
                  key={p.name}
                  name={p.name}
                  onClick={() => this.handleClick(p.id)}
                  price={p.price}
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
  products: PropTypes.array,
}

Products.defaultProps = {
  products: [],
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
})

export default connect(
  mapStateToProps,
  { addToCart },
)(Products)
