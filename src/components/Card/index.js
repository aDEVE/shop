import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Description,
  IconCart,
  Img,
  Title,
  Wrapper,
  WrapperBottom,
  WrapperImg,
} from './styles'

class Card extends PureComponent {
  render() {
    const { alt, description, img, name, onClick, price } = this.props
    return (
      <Wrapper>
        <WrapperImg>
          <Img src={img} alt={alt} />
        </WrapperImg>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <WrapperBottom>
          <span>{price}$</span>
          <Button onClick={onClick}>
            <IconCart style={{ width: '16px', height: '16px' }} />
          </Button>
        </WrapperBottom>
      </Wrapper>
    )
  }
}
Card.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
}

Card.defaultProps = {
  alt: '',
  description: '',
  img:
    'https://s1.lmcdn.fr/multimedia/ee1500048925/1b4e1570b569b/produits/carrelage-sol-gris-effet-beton-alma-l-45-x-l-45-cm.jpg?$p=hi-w795',
  name: '',
  onClick: null,
  price: null,
}

export default Card
