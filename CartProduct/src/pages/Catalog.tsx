import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import '../styles/Catalog.css'

const Catalog = () => {
    const productsParms = useProducts();

    if (productsParms.isLoading) {
        return <h2>Loading...</h2>
    }

    if (productsParms.isError) {
        return <h2>There was an error...</h2>
    }

    return (
        <>
            <div className="wrapper">
                <h1>Catalog</h1>
                <ul className="products__list">
                    {productsParms.products && productsParms.products.length > 0 ?
                        productsParms.products.map(productItem => {
                            const { id, name, url, price } = productItem;

                            return <li key={id} className="product__item">
                                <h3 className="product__name">{name}</h3>
                                <img className="product__img" src={url} alt="product img" />
                                <span className="product__price">{price} грн</span>
                                <Link to={`/catalog/${id}`} className="product__btn">Купити</Link>
                            </li>
                        }) : <div className="error">Not found Fetch Data</div>}

                </ul>
            </div>
        </>
    )
};

export default Catalog;