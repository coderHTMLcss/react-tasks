import { useEffect, useState, useCallback } from "react";

export enum DIRECTIONS {
    INCR = 'INCREMENT',
    DECR = "DECREMENT"
}

interface ITimerProps {
    startValue: number,
    step?: number,
    direction: DIRECTIONS,
    endValue: number
}

const TimerStorage: React.FC<ITimerProps> = ({ startValue, step = 1, direction, endValue }) => {
    const storageTimerValue = JSON.parse(localStorage.getItem('timer') || 'false');

    const [time, setTime] = useState<number>(storageTimerValue || startValue);
    const [intervalID, setIntervalID] = useState<number | null>(null);

    //TODO: почитай про useCallback
    const handleStopTimer = useCallback(() => {
        clearInterval(intervalID as number)
    }, [intervalID])

    const handleStartTimer = () => {
        const interval = setInterval(() => {
            direction ? setTime(prevTime => prevTime - step) : setTime(prevTime => prevTime + step)
        }, 1000);
        setIntervalID(interval)
    }

    useEffect(() => {
        localStorage.setItem('timer', JSON.stringify(time))
    }, [time]);

    useEffect(() => {
        return () => clearInterval(intervalID as number);
    }, [intervalID]);

    useEffect(() => {
        if (time && time === endValue) {
            handleStopTimer()
        }
    }, [time, endValue, handleStopTimer])

    return (
        <div>
            <h3>Timer</h3>
            <button onClick={handleStartTimer} type='button'>Start Timer</button>
            <button onClick={handleStopTimer} type='button'>Stop Timer</button>
            <div>Time:{time}</div>
        </div>
    )
};

export default TimerStorage