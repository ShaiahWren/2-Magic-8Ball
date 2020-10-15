import React from 'react';
import styled from 'styled-components';

const EightBallAnswer = styled.div`
    font-size: 4rem;
    font-weight: bold;

    .answerText {
        color: #efefef;
        font-size: 1rem;

    }

    .eight {
        padding: 8px;
        margin: 0 auto;
        border-radius: 50%;
        width: 50px;
        height: 70px;
        background-color: white;
    }
`;

const BigBall = styled.div`
    background-color: black;
    border-radius: 50%;
    height: 210px;
    width: 210px;
    margin: 0 auto;

    .eight {
        padding: 8px;
        border-radius: 50%;
    }
`;

const Eight = styled.div`
    padding: 8px;
    background-color: white;
    border-radius: 50%;
    
    
    
`;

const Answer = props => {
    return (
        <>
        <EightBallAnswer>
            <BigBall><Eight>8</Eight><span className="answerText">{props.answer}</span></BigBall>
        </EightBallAnswer>
        </>
    );
}

export default Answer;

