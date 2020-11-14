import styled from 'styled-components';
import React, { Component } from "react";

const Body = styled.div`
max-height: calc(100vh - 150px);
padding: 13px;
overflow: auto;
`

class ModalBody extends Component {
    render() {
        return (
            <Body>
                {this.props.children}
            </Body>
        )
    }
}

export default ModalBody 