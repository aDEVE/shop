import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
`

Text.defaultProps = {
  textAlign: 'inherit',
}

Text.propTypes = {
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

export default Text
