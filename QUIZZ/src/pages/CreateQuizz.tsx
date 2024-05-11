import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";

const CreateQuizz = () => {
    const [quizzTitle, setQuizzTitle] = useState<string>('');
    const [quizzQuestions, setQuizzQuestions] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('')
    const [disableInput, setDisableInput] = useState(false)

    useEffect(() => {
        if (quizzQuestions) {
            setDisableInput(true);
        } else {
            setDisableInput(false);
        }
    }, [quizzQuestions]);


    const handleAddQuestions = () => {
        setQuizzQuestions([...quizzQuestions, inputValue])
    }
    console.log(quizzTitle);
    console.log(quizzQuestions);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} action="#">
            <label htmlFor="quizzName">Title of Quizz:
                <input
                    value={quizzTitle}
                    id="quizzName"
                    type="text"
                    onChange={(e) => setQuizzTitle(e.target.value.trim())}
                />
            </label>
            <label htmlFor="questions">New Question:
                < input
                    id="questions"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.trim())}
                />
                {disableInput && < input
                    id="questionss"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.trim())}
                />}
            </label>
            <button onClick={handleAddQuestions} type="submit">Create New Quizz</button>
            <Link to="/">To Home</Link>
        </form>
    );
};

export default CreateQuizz;
