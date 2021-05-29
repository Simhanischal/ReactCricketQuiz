import React from 'react';
import styled from 'styled-components';
import { Button, Card } from '../../../../components';
import QuestionBank from '../QuestionBank';

const AnswerCard = styled(Card)`
    width: 250px;
    height: 220px;
    background-color: #E1E077;
`;

const StyledAnswers = styled.ul`
    list-style-type: none;
    margin: 0 auto;
`;

const Answer = styled.li`
    font-size: 0.8em;
    display: flex;
    align-items: center;
`;

const AnswerButton = styled(Button)`
    width: 150px;
    padding: 5px;
    &:hover{
        color: #FFFFFF;
        background-color: #000000;
    }
`;

const Answers = props => {
    return(
        <AnswerCard>
            <StyledAnswers>
                {QuestionBank.map((question) => {
                    if(question.id === props.currentQuestion){
                        return question.answerOptions.map((options) =>
                            <Answer key={options.text}>
                                <AnswerButton onClick={() => props.handleClick(options.isCorrect)}>
                                    {options.text}
                                </AnswerButton>
                            </Answer>
                            )
                        }
                    return null;
                    })
                }
            </StyledAnswers>
        </AnswerCard>
    )
}

export default Answers;