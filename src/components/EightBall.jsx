import React, { useState } from "react";
import Answer from './Answer';
import styled from 'styled-components';



const Title = styled.h1`
    color: #efefef;
    font-size: 3rem;

    .p {
        height: 6px;
        width: 12px;
        color: #efefef;
    }
`;




const EightBall = props => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const _handleChange = (question) => {
        setQuestion(question)

    }
    const _handleSubmit = async (event) => {
        event.preventDefault();

        const url = `https://8ball.delegator.com/magic/JSON/${question}`;
            const response = await fetch(url);
            const data = await response.json();
            setAnswer(data.magic.answer);
    }

    return (
        <>  
            <Title>Magic-8Ball</Title>
            <form onSubmit={(event) => _handleSubmit(event)}>
                <label>
                    <p>Always trust a Magic-8Ball with important life questions</p>
                    <p className="input"><input type="text" value={question} onChange={(event => _handleChange(event.target.value))} /></p>
                </label>
                <button type="submit"><p>Get an answer</p></button>
                
            </form>
            {!!answer ? <Answer answer={answer} />
                
             : (null)}
            
        </>
    );
};
export default EightBall;