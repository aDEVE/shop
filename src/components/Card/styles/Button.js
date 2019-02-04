import styled from 'styled-components'

export default styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 24px;
  justify-content: center;
  outline: 0;
  width: 24px;
  margin: 0;
  padding: 4px;

  &:hover {
    background: grey;
  }
`
