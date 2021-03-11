import React, { ReactElement, FC } from 'react';
<<<<<<< HEAD
import styles from './MembersSection.module.scss';

const MembersSection: FC = (): ReactElement => (
    <div id={styles.wrapper}>
        <div id={styles.heading}>Members (8)</div>
        <div id={styles.members}>
=======
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
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
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
