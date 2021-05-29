import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components';
import Title from '../../../../components/Title';


const Instruction = styled.li`
    font-size: 1em;
`;

const InstructionsTitle = styled(Title)`
    font-size: 1.5em;
    color: #00328C;
    text-decoration: underline;
`;

const StyledInstructions = styled.ul`
    list-style-type: disc;
    line-height: 2.2;
`;

const InstructionsCard = styled(Card)`
    width: 500px;
    height: 250px;
    color: #000000;
    background-color: #F5E205;
    text-align: left;
`;

const Instructions = () => {
    return(
        <InstructionsCard>
            <InstructionsTitle>Instructions</InstructionsTitle>
            <StyledInstructions>
                <Instruction>There will be a total of 4 questions to answer.</Instruction>
                <Instruction>Each question will have 4 answer options to choose from.</Instruction>
                <Instruction>Each righ answer you choose will award you one point.</Instruction>
                <Instruction>There is no negative points for wrong answers.</Instruction>
                <Instruction>There is no time limit to answer the questions.</Instruction>
            </StyledInstructions>
        </InstructionsCard>
    )
}

export default Instructions;