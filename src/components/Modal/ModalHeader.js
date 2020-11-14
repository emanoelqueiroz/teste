import styled from 'styled-components';
import React, { Component } from "react";

const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #ddd;
padding: 0 13px;
width: 100%;
`

class ModalHeader extends Component {
    render() {
        return (
            <Header>
                {this.props.children}
            </Header>
        )
    }
}

export default ModalHeader 