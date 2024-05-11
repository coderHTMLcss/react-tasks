import { IList } from "../../App";

interface ICaruselItemProps {
    singleItem: IList
}

const CaruselItem: React.FC<ICaruselItemProps> = ({ singleItem }) => {
    return (
        <li className="carusel__item">
            <h3 className="carusel__item-title">{singleItem.title}</h3>
            <img className="carusel__item-picture" src={singleItem.imgUrl} alt="carusel picture" />
            <p className="carusel__item-description">{singleItem.text}</p>
        </li>
    )
};

export default CaruselItem;