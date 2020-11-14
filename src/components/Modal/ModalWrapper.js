import styled, { keyframes } from 'styled-components'
import React, { Component } from "react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    animation: 0.5s ${fadeIn} forwards;
`;

const ModalDialog = styled.div`
    width: 600px;
    max-width: 90%;
    background: #fff;
`;

class ModalWrapper extends Component {
    render() {
        return (
            <Backdrop>
                <ModalDialog>
                    {this.props.children}
                </ModalDialog>
            </Backdrop>
        )
    }
}

export default ModalWrapper;