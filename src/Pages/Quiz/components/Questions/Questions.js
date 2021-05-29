import React from 'react';
import styled from 'styled-components';
import QuestionBank from '../QuestionBank';
import { Card, Title } from '../../../../components';

const QuestionCard = styled(Card)`
    width: 250px;
    height: 220px;
    background-color: #D4C7BC;
    color: #000000;
`;

const QuestionTitle = styled(Title)`
    font-size: 1.5em;
    color: #000000;
`;

const Question = styled.h3`
    font-size: 1em;
`; 

const Questions = props => {
    return(
        <QuestionCard>
            <QuestionTitle>Question  
                {QuestionBank.map((question) => {
                    let questionId;
                    if(question.id === props.currentQuestion){
                        questionId = question.id + 1;
                    }
                    return questionId;
                })}/{QuestionBank.length} 
            </QuestionTitle>
            <Question>
                {QuestionBank.map((question) => {
                    let questionText;
                    if(question.id === props.currentQuestion){
                        questionText = question.question;
                    }
                    return questionText;
                })}
            </Question>
        </QuestionCard>
    )
}

export default Questions;

