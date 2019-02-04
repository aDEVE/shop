import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconCart, Img, Wrapper, WrapperBottom, WrapperImg } from './styles'
import Button from '../Button'
import { BigText, Text } from '../Typographies'

class Card extends PureComponent {
  render() {
    const { alt, description, id, img, name, onClick, price } = this.props
    return (
      <Wrapper>
        <WrapperImg>
          <Img src={img} alt={alt} />
        </WrapperImg>
        <BigText>{name}</BigText>
        <Text>{description}</Text>
        <WrapperBottom>
          <span>{price}$</span>
          <Button className={`add-to-cart-${id}`} onClick={onClick}>
            <IconCart style={{ fill: 'white', width: '16px', height: '16px' }} />
          </Button>
        </WrapperBottom>
      </Wrapper>
    )
  }
}
Card.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
}

Card.defaultProps = {
  alt: '',
  description: '',
  id: null,
  img:
    'https://s1.lmcdn.fr/multimedia/ee1500048925/1b4e1570b569b/produits/carrelage-sol-gris-effet-beton-alma-l-45-x-l-45-cm.jpg?$p=hi-w795',
  name: '',
  onClick: null,
  price: null,
}

export default Card
