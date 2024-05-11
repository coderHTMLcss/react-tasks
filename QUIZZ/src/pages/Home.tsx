import { Link } from "react-router-dom";
import { quizzQuestions } from "../root/quizzQuestions";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            {quizzQuestions.map((question) => (
                <div key={uuidv4()}>
                    <h4>{question}</h4>
                </div>
            ))}
            <Link to="/quizz">
                <button type="button">Перейти до опитування</button>
            </Link>
            <Link to="/createQuizz">
                <button type="button">Перейти до створення</button>
            </Link>
        </div>
    );
}

export default Home;
