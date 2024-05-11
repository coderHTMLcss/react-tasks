import { useState } from "react";
import { IList } from "../../App";
import CaruselItem from "../CaruselItem/CaruselItem";

interface ICaruselProps {
    list: IList[]
}

const Carusel: React.FC<ICaruselProps> = ({ list }) => {
    const [index, setIndex] = useState<number>(0);

    const handlePrevClick = () => {
        setIndex(prevIndex => (prevIndex - 1 + list.length) % list.length);
    };

    const handleNextClick = () => {
        setIndex(prevIndex => (prevIndex + 1 + list.length) % list.length);
    };

    // const handlePrevClick = () => {
    //     setIndex(prevIndex => prevIndex === 0 ? list.length - 1 : prevIndex - 1);
    // };

    // const handleNextClick = () => {
    //     setIndex(prevIndex => prevIndex === list.length - 1 ? 0 : prevIndex + 1);
    // };

    const singleItem = list[index];

    return (
        <div className="carusel__wrapper">
            <h2 className="carusel__title"></h2>
            <button onClick={handlePrevClick} className="caruse__btn-prev" type="button">Previos</button>
            <button onClick={handleNextClick} className="caruse__btn-next" type="button">Next</button>
            <ul className="carusel__list">
                <CaruselItem singleItem={singleItem} />
            </ul>
        </div>
    )
};

export default Carusel;