import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Button, Card, Title } from '../../components';

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    height: 600px;
`;

const ErrorCard = styled(Card)`
    background-color: #E6272E;
`;

const ErrorTitle = styled(Title)`
    color: #FFFFFF;
`;

const HomeButton = styled(Button)`
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

const Error = () => {
    let location = useLocation();
    return(
        <ErrorContainer>
            <ErrorCard>
                <LineBreak />
                <LineBreak />
                <ErrorTitle>
                    No match for <code>{location.pathname}</code>
                </ErrorTitle>
                <LineBreak />
                <Link to="/">
                    <HomeButton>Home</HomeButton>
                </Link>
            </ErrorCard> 
        </ErrorContainer>
    );
}

export default Error;