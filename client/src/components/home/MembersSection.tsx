import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
    background-color: #ccc;
    float: right;
    position: relative;
    top: 0px;
    padding: 10px 20px;
`;
const Heading = styled.div`
    font-size: 20px;
    color: black;
`;

const Members = styled.div`
    border-bottom: 1px solid grey;
    > div {
        margin: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        color: #44f;
        font-family: monospace;
    }
`;
const MembersSection: FC = (): ReactElement => (
    <Wrapper>
        <Heading>Members (8)</Heading>
        <Members>
            <div>bidex</div>
            <div>Tekipeps</div>
            <div>Cindy Ebirim</div>
            <div>Seun</div>
            <div>Daghost</div>
            <div>Emedith</div>
            <div>Timberon</div>
            <div>Vikky</div>
        </Members>
    </Wrapper>
);

export default MembersSection;
