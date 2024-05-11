import { useState } from "react"

const FinishButton = () => {
    const [isFinish, setIsFinish] = useState(false);

    const handleFinish = () => {
        setIsFinish(true)
    }
    return (
        <>
            <button className="stop__btn" onClick={handleFinish} type="button">Finish</button>
            {isFinish && (<p>quizz is finished</p>)}
        </>
    )
}

export default FinishButton;