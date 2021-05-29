import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Card, Title } from '../../../../components';
import Answers from '../Answers';
import Questions from '../Questions';

const QuizContainer = styled.div`
    display: flex;
    align-items: center;
    height: 600px;
`;

const QuizCard  = styled(Card)`
    background-color: #21ADFF;
`;

const QuestionAnswer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const QuitButton = styled(Button)`
    padding: 10px 15px;
    color: #DB302A;
    border-color: #DB302A;
    background-color: #FFFFFF;
    &:hover{
        border-color: #21ADFF;
        color: #FFFFFF;
        background-color: #DB302A;
    }
`;

const LineBreak = styled.br``;

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    
    const handleClick = isCorrect => {
        setCurrentQuestion(currentQuestion + 1);
        if(isCorrect)
            setScore(score + 1);
    }

    let display;

    if(currentQuestion !== 4){
        display = (
            <QuestionAnswer>
                <Questions currentQuestion={currentQuestion} />
                <Answers currentQuestion={currentQuestion} handleClick={handleClick}/>
            </QuestionAnswer>);
    }
    else{
        display = (
            <>
                <Title>Quiz Over</Title>
                <LineBreak />
                <Title>You scored {score} point(s)</Title>
            </>
        );
    }

    return(
        <QuizContainer>
            <QuizCard>
                <Title>Cricket Quiz App</Title>
                <LineBreak />
                <LineBreak />
                {display}
                <LineBreak />
                <LineBreak />
                <Link to="/">
                    <QuitButton>Quit</QuitButton>
                </Link>
            </QuizCard>
        </QuizContainer>
    )
}

export default Quiz;

