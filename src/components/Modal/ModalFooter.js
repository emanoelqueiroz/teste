import styled from 'styled-components';
import React, { Component } from "react";

const Footer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
border-top: 1px solid #ddd;
padding: 8px 13px;
width: 100%;
`

class ModalFooter extends Component {
    render() {
        return (
            <Footer>
                {this.props.children}
            </Footer>
        )
    }
}

export default ModalFooter 