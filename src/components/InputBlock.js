import styled, { css } from 'styled-components'

const InputBlock = styled.div`
    margin-bottom: 13px;

    ${props => props.parent && css`
        position: relative;
        margin: 3px 0 0;
        display: flex;
        justify-content: space-between;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 10px;

        &:before {
            content: '';
            position: absolute;
        }
    `}

    ${props => props.child && css`
        margin: 0;
        
        + div {
            margin-left: 8px;
        }
    `}

`

export default InputBlock