import styled, { css } from 'styled-components'

const Th = styled.th`
    text-align: left;
    padding: 8px; 

    ${props => props.left && css`
        text-align: left;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.right && css`
        text-align: right;
    `}
`

export default Th