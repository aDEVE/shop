import styled from 'styled-components'
import { Text } from '../Typographies'

export default styled(Text).attrs({
  as: 'button',
  type: 'button',
})`
  background: grey;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background: lightgrey;
  }
`
