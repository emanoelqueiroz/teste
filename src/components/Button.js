import styled, { css } from 'styled-components'

// TODO: hovers
const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background: #785afc;
  border-radius: 2px;
  border: 0;
  font-size: 11px;
  padding: 8px 13px;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    background-color: #785afc;
  }

  ${props => props.default && css`
    background-color: grey;

    &:hover {
      background-color: grey;
    }
  `}

  ${props => props.danger && css`
    background-color: #ea4335;

    &:hover {
      background-color: #ea4335;
    }
  `}

  ${props => props.flat && css`
    color: grey;
    background-color: #fff;

    &:hover {
      background-color: #ddd;
    }
  `}

  & + button {
    margin-left: 8px;
  }

`

export default Button