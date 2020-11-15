import styled, { css } from 'styled-components'
import React, { Component } from "react";

const ThTitle = styled.th`
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
`;

const Span = styled.span`
    display: block;
    padding: 0;
    margin-bottom: 5px;
    font-weight: 700;

    @media screen and (min-width: 615px) {
        display: none;
    }
 `;

class Th extends Component {
    render() {
        if (this.props.mobile)
            return (
                <Span {...this.props}>
                    {this.props.children}
                </Span>
            );

        return (
            <ThTitle {...this.props}>
                {this.props.children}
            </ThTitle>
        );
    }
}

export default Th;