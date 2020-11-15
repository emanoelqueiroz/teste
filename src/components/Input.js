import styled, { css } from 'styled-components'

const Input = styled.input`
    display: block;
    border-radius: 2px;
    border: 1px solid #ddd;
    width: 100%;
    padding: 8px 13px;
    margin-top: 3px;

    ${props => props.number && css`
        text-align: right;
    `}
`

export default Input