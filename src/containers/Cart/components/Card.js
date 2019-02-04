import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Img,
  WrapperCard,
  WrapperVertical
} from '../styles'

class Card extends  Component {
  render() {
    const { description, img, name, onClick, price, quantity } = this.props
    return(
      <WrapperCard>
        <div style={{display: 'flex'}}>
        <Img src={img} alt={name}/>
        <WrapperVertical>
          <span>{name}</span>
          <p>{description}</p>
        </WrapperVertical>
        </div>
        <WrapperVertical>
          <span>{price}$ (x{quantity})</span>
          <button onClick={onClick} type="button">delete</button>
        </WrapperVertical>
      </WrapperCard>
    )
  }
}

Card.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
  quantity: PropTypes.number
}

Card.defaultProps = {
  description: null,
  img: null,
  name: null,
  onClick: null,
  price: null,
  quantity: null
}

export default Card