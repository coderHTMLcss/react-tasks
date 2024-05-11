import React, { useState } from "react";
import { Link } from "react-router-dom";
import FinishButton from "../components/FinishButton/FinishButton";
import { quizzQuestions } from "../root/quizzQuestions";

const Quizz = () => {
    const [index, setIndex] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [contentBtn, setContentBtn] = useState<string>('start quizz');

    const hasNext = index < quizzQuestions.length - 1;

    const handleStartClick = () => {
        setIsStarted(true);
        setContentBtn('Next');
    }

    const handleNextClick = () => {
        if (!isStarted || hasNext) {
            handleStartClick();
            setIndex(prevIndex => prevIndex + 1);
        } else {
            setIsFinished(true);
            setContentBtn('Finish');
        }
    }

    return (
        <div>
            <h1>Quizz Page</h1>
            {!isStarted && !isFinished && (
                <button onClick={handleStartClick} type="button">{contentBtn}</button>
            )}
            {isStarted && !isFinished && (
                <>
                    <button onClick={handleNextClick} type="button">{contentBtn}</button>
                    <ul>
                        <li key={index}>{quizzQuestions[index]}</li>
                    </ul>
                </>
            )}
            {isFinished && (
                <FinishButton />
            )}
            <Link to="/">
                <button type="button">Go To Home</button>
            </Link>
        </div>
    );
}

export default Quizz;
