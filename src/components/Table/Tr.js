import styled, { css } from 'styled-components'

const Tr = styled.tr`
    display: flex;
    flex-direction: column;

    &:nth-child(2n) {
        background-color: #f3f3f3;
    }

    @media screen and (min-width: 615px) {
        display: table-row;
    }
`

export default Tr