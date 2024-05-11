import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    url: string;
    price: string;
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveProduct = (id: number) => {
        const filteredProducts = cartItems.filter(item => item.id !== id);
        setCartItems(filteredProducts);
        localStorage.setItem('cart', JSON.stringify(filteredProducts));
    }

    return (
        <>
            <h1>Cart</h1>
            {cartItems && cartItems.length > 0 ? cartItems.map(item => (
                <div key={item.id}>
                    <p>Product ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <img src={item.url} alt="product img" />
                    <button onClick={() => handleRemoveProduct(item.id)} type='button'>Видалити</button>
                </div>
            )) :
                <div>
                    <p>В корзині не має товарів.Оберіть товар в <Link to="/catalog">Каталозі</Link></p>
                </div>}
        </>
    );
};

export default Cart;
