import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h1`
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
`

Title.defaultProps = {
  textAlign: 'inherit',
}

Title.propTypes = {
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

export default Title
