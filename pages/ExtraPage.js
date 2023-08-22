import {useCallback, useEffect, useState} from "react";
import classes from "./ExtraPage.module.css";

const ExtraPage = ({onExtraTotalChange }) => {
    const [extra, setExtra] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState({});
    const fetchExtraHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/extras/', {
                headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Token ${authCtx.token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const loadedExtra = data.results.map((result) => {


                return {
                    id: result.id,
                    name: result.name,
                    per: result.per,
                    price: result.price,

                };
            });

            setExtra(loadedExtra);
        } catch (error) {
            setError(error.message);
            alert(error);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchExtraHandler();
    }, [fetchExtraHandler]);
     const handleExtraChange = (itemId) => {
        setSelectedExtras((prevSelectedExtras) => {
            const updatedSelectedExtras = { ...prevSelectedExtras };
            updatedSelectedExtras[itemId] = !updatedSelectedExtras[itemId];
            return updatedSelectedExtras;
        });
    };

    const calculateTotalPrice = () => {
        return extra.reduce((total, item) => {
            if (selectedExtras[item.id]) {
                return total + item.price;
            }
            return total;
        }, 0);
    };
   useEffect(() => {
        const calculatedTotalPrice = calculateTotalPrice();
        onExtraTotalChange(calculatedTotalPrice); // Notify parent component
        localStorage.setItem("extraTotalPrice", calculatedTotalPrice.toString()); // Update localStorage
    }, [selectedExtras]);
    return (
        <>
            <table className='table'>
                    <tbody>
                    {extra.map((item) =>
                    <tr key={item.id}>
                        <td>{item.name}({item.per})</td>
                        <td><input type="checkbox" checked={selectedExtras[item.id] || false}
                                    onChange={() => handleExtraChange(item.id)}/></td>
                        <td style={{textAlign:"end"}}>{item.price}$</td>

                    </tr>)}
                    <tr>
                        <td>Extras prices</td>
                        <td></td>
                        <td style={{textAlign:"end"}}>{calculateTotalPrice()}$</td>
                    </tr>
                    </tbody>
                </table>

        </>


    )
}
export default ExtraPage;