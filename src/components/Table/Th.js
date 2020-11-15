import styled, { css } from 'styled-components'

const Th = styled.th`
    display: none;
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

    @media screen and (min-width: 615px) {
        display: table-cell;
    }

    ${props => props.mobile && css`
       display: block;
       padding: 0;
       margin-bottom: 5px;

        @media screen and (min-width: 615px) {
            display: none;
        }
    `}
`

export default Th