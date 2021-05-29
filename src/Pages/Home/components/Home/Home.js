import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Card } from '../../../../components';
import Instructions from '../Instructions';
import Title from '../../../../components/Title';

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    height: 600px;
`;

const HomeCard = styled(Card)`
    background-color: #D5CAE3;
`;

const StartButton = styled(Button)`
    padding: 10px 15px;
    border-color: #FFFFFF;
    color: #FFFFFF;
    background-color: #49D65F;
    &:hover{
        border-color: #D5CAE3;
        color: #49D65F;
        background-color: #FFFFFF;
    }
`;

const LineBreak = styled.br``;

const Home = () => {
    return(
        <HomeContainer>
            <HomeCard>
                <Title>Cricket Quiz App</Title>
                <LineBreak />
                <Instructions />
                <LineBreak />
                <Link to="/quiz">
                    <StartButton>Start</StartButton>
                </Link>
            </HomeCard>
        </HomeContainer>
    )
}

export default Home;