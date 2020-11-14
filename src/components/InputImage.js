import styled from 'styled-components';
import React, { Component } from "react";

const Circle = styled.label`
    position: relative;
    cursor: pointer;
    display: block;
    width: ${props => props.size ? props.size : 100}px;
    height: ${props => props.size ? props.size : 100}px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: center/cover;
    margin: 0 auto 13px;
    transition: 0.2s;

    &:after {
        content: '+';
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        color: #fff;
        background: #785afc;
        border-radius: 50%;
        text-align: center;
        transition: 0.2s;
        transform: scale(0);
    }

    &:hover {
        border-color: #785afc;

        &:after {
            transform: scale(1);
        }
    }
`;

const Input = styled.input`
    display: none;
`;

class InputImage extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = event => {
            this.props.setFieldValue("image", event.target.result);
        };

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <Circle style={{ backgroundImage: `url(${this.props.image})` }}>
                <Input type="file" accept=".jpg, .png, .jpeg" {...this.props} onChange={this.handleChange} />
            </Circle>
        );
    }
}

export default InputImage;