import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FinishButton from "../FinishButton/FinishButton";

interface IProps {
    props: string[],
}

const Quizz: React.FC<IProps> = ({ props }) => {
    const [index, setIndex] = useState<number>(0);
    const [contentBtn, setContentBtn] = useState<string>('start quizz');
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const hasNext = index < props.length - 1;

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
        <div className="quizz__wrapper">
            {!isStarted && !isFinished && (
                <button onClick={handleStartClick} className="quizz__btn" type="button">{contentBtn}</button>
            )}
            {isStarted && !isFinished && (
                <button onClick={handleNextClick} className="quizz__btn" type="button">{contentBtn}</button>
            )}
            <ul className="quizz__list">
                {isStarted && !isFinished && (
                    <li key={uuidv4()}>{props[index]}</li>
                )}
            </ul>
            {isFinished && (
                <FinishButton />
            )}
        </div>
    );
};

export default Quizz;