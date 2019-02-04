import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.p`
  color: #688eb7;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
  text-transform: uppercase;
`

Text.defaultProps = {
  textAlign: 'inherit',
}

Text.propTypes = {
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

export default Text
