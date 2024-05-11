import { useParams, Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

interface Product {
    id: number;
    name: string;
    url: string;
    price: string;
}

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const productsParms = useProducts();

    const productsList: Product[] = productsParms.products;
    const productById: Product | undefined = productsList.find(productItem => productItem.id.toString() === id);

    if (!productById) {
        return <div>Товар не знайдено</div>;
    }

    const addToCart = () => {
        if (productById) {
            const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            localStorage.setItem('cart', JSON.stringify([...cartItems, productById]));
        }
    };


    const { name, url, price } = productById;

    return (
        <div>
            <h2>Product Page</h2>
            <p>Product ID: {id}</p>
            <ul>
                <li className="product__item">
                    <h3 className="product__name">{name}</h3>
                    <img className="product__img" src={url} alt="product img" />
                    <span className="product__price">{price} грн</span>
                    <button onClick={addToCart} className="product__btn">Купити</button>
                </li>
            </ul>
            <Link to="/catalog">Назад до каталогу товарів</Link>
        </div>
    );
};

export default Product;
