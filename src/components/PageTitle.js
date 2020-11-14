import styled from 'styled-components';
import React, { Component } from "react";
import Section from './Section';

const TitleWrapper = styled.div`
    background-color: #785afc;
    padding: 21px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 34px;
`;

class PageTitle extends Component {
    render() {
        return (
            <TitleWrapper>
                <Section>
                    <Title>
                        {this.props.children}
                    </Title>
                </Section>
            </TitleWrapper>
        );
    }
}

export default PageTitle;