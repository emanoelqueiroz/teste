import styled, { css } from 'styled-components'

const Td = styled.td`
    padding: 8px; 
    border-left: 3px solid #7b6cfa; 

    ${props => props.noBorder && css`
        border-left: 0;
        text-align: center;
    `}

    @media screen and (min-width: 615px) {
        border: 0;
        padding: 8px;

        ${props => !props.noBorder && css`
            &:first-child {
                border-left: 3px solid #7b6cfa;
            }
        `}

        ${props => props.left && css`
            text-align: left;
        `}

        ${props => props.center && css`
            text-align: center;
        `}

        ${props => props.right && css`
            text-align: right;
        `}
    }
`

export default Td