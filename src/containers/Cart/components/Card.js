import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Img, WrapperCard, WrapperVertical } from '../styles'
import { BigText, Text } from '../../../components/Typographies'
import Button from '../../../components/Button'

class Card extends Component {
  render() {
    const { className, description, img, name, onClick, price, quantity } = this.props
    return (
      <WrapperCard className={className}>
        <div style={{ display: 'flex' }}>
          <Img src={img} alt={name} />
          <WrapperVertical>
            <BigText>{name}</BigText>
            <Text>{description}</Text>
          </WrapperVertical>
        </div>
        <WrapperVertical>
          <Text>
            {price}$ (x{quantity})
          </Text>
          <Button onClick={onClick}>delete</Button>
        </WrapperVertical>
      </WrapperCard>
    )
  }
}

Card.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
  quantity: PropTypes.number,
}

Card.defaultProps = {
  className: null,
  description: null,
  img: null,
  name: null,
  onClick: null,
  price: null,
  quantity: null,
}

export default Card
