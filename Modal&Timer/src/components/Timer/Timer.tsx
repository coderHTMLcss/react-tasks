import { useEffect, useState } from "react";

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



const Timer: React.FC<ITimerProps> = ({ startValue, step = 1, direction, endValue }) => {
    const [time, setTime] = useState(startValue);
    const [intervalID, setIntervalID] = useState<number | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            direction ? setTime(prevTime => prevTime - step) : setTime(prevTime => prevTime + step)
        }, 1000);
        setIntervalID(interval)

        return () => clearInterval(interval as number);
    }, []);


    useEffect(() => {
        if (time && time === endValue) {
            clearInterval(intervalID as number)
        }
    }, [time, endValue, intervalID])


    return (
        <div>
            <h3>Timer</h3>
            <div>Time:{time}</div>
        </div>
    )
};


export default Timer