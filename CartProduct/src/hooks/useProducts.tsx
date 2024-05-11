import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return
                }
                const data = await response.json();
                // console.log(data);

                setProducts(data);
            } catch (error) {
                setIsError(true)
                console.log(error);
            }
            setIsLoading(false)
        }

        fetchData()
    }, []);

    return {
        products,
        isLoading,
        isError
    }
};

export default useProducts;