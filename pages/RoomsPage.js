import classes from './RoomsPage.module.css';
import {useCallback, useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";

const RoomsPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [roomGuests, setRoomGuests] = useState({});
    const [selectedRoomCounts, setSelectedRoomCounts] = useState({});
    const [booking, setBooking] = useState({});
    const [showContinue, setShowContinue] = useState(false);
    const history = useHistory();
    const [selectedProductForBooking, setSelectedProductForBooking] = useState(null);
    const [price, setPrice] = useState("");
    const [roomType, setRoomType] = useState("");


    const handleRoomCountChange = (productId, value) => {
        setShowContinue(false);
        setSelectedRoomCounts((prevCounts) => {
            const updatedCounts = {...prevCounts};
            if (updatedCounts[productId] === value) {
                // If the selected value is the same as the previous one, remove it
                delete updatedCounts[productId];
            } else {
                // Otherwise, update the selected value for the product
                updatedCounts[productId] = value;
            }
            return updatedCounts;
        });

        // Update the booking state based on productId
        setBooking((prevBooking) => ({
            ...prevBooking,
            [productId]: true, // Set booking to true for the specific productId
        }));
    };

    useEffect(() => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => ({
                ...product,
                hide:
                    selectedRoomCounts[product.id] !== undefined &&
                    selectedRoomCounts[product.id] !== product.room_count &&
                    selectedRoomCounts[product.id] !== product.room_count &&
                    booking[product.id], // Hide when booking is false for the specific productId
            }))
        );
    }, [selectedRoomCounts, booking]);

    const handleClear = (productId) => {
        setSelectedRoomCounts((prevCounts) => {
            const updatedCounts = {...prevCounts};
            delete updatedCounts[productId];
            return updatedCounts;
        });

        // Update the booking state to hide the "BOOK" button for the specific productId
        setBooking((prevBooking) => ({
            ...prevBooking,
            [productId]: false,
        }));
    };

    const fetchProductsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/rooms/', {
                headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Token ${authCtx.token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const loadedProducts = data.results.map((result) => {
                const priceForRoom = result.prices.find((price) => price.room_id === result.id);
                const priceOfDay = priceForRoom ? priceForRoom.price_of_day : null;
                const images = result.images.map((imageObj) => {
        return { image: imageObj.image };
    });

                return {
                    id: result.id,
                    type: result.type,
                    adults: result.adults,
                    children: result.children,
                    room_count: result.room_count,
                    description: result.description,
                    images:images,
                    max_occupancy: result.max_occupancy,
                    prices: priceOfDay,
                };
            });

            setProducts(loadedProducts);
        } catch (error) {
            setError(error.message);
            alert(error);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchProductsHandler();
    }, [fetchProductsHandler]);

    const handleBookClick = (productId) => {
        setBooking((prevBooking) => ({
            ...prevBooking,
            [productId]: false, // Set booking to false for the specific productId
        }));
        setShowContinue((prevBooking) => ({
            ...prevBooking,
            [productId]: true, // Set booking to true for the specific productId
        }));

        setSelectedProductForBooking(productId);
    };

    const handleGuestChange = (event, roomId, guestType) => {
        const updatedRoomGuests = {...roomGuests};
        updatedRoomGuests[roomId] = {
            ...updatedRoomGuests[roomId],
            [guestType]: parseInt(event.target.value, 10),
        };
        setRoomGuests(updatedRoomGuests);
    };

    const handleContinue = (event, productId) => {
        event.preventDefault();

        if (selectedRoomCounts[productId] !== undefined && selectedRoomCounts[productId] > 0) {
            const selectedProduct = products.find(product => product.id === productId); // Find the selected product
            if (selectedProduct) {
                setRoomType(selectedProduct.type); // Set the room type based on the selected product
                setPrice(selectedProduct.prices); // Set the price based on the selected product

                const selectedRooms = Array.from({length: selectedRoomCounts[productId]}, (_, index) => ({
                    adults: roomGuests[index]?.adults || 1,
                    children: roomGuests[index]?.children || 0,
                    price: selectedProduct.prices,
                }));

                const data = {
                    roomType: selectedProduct.type,
                    productId,
                    selectedRooms,
                };
                console.log(data)
                history.push({
                    pathname: "/booking-confirmation",
                    state: data,
                });
            }
        } else {
            alert("Please select at least one room.");
        }
    };


    return (
        <div>
            <div className={classes.homepage2}>
                <p>
                    <strong className={classes.text1}>Available rooms from</strong>
                    <br/>
                    Friday, July 28th, 2023 to Saturday, July 29th, 2023
                </p>
            </div>
            <div>
                {products.map((product) => (
                    <div className={classes.rooms} key={product.id}>
                        <div className={classes.header}>
                            <strong value={roomType}>{product.type}</strong>
                        </div>
                        <div className={classes.roombody}>
                            <div className={classes.leftdata}>
                                <div className={classes.selectrooms}>
                                    <label>Select number of rooms</label>
                                    <select
                                        id="guestChoice"
                                        className={classes.formcontrol}
                                        onChange={(event) => handleRoomCountChange(product.id, event.target.value)}
                                        value={selectedRoomCounts[product.id] || 0}
                                    >
                                        <option value={0} disabled>
                                            0
                                        </option>
                                        {Array.from({length: product.room_count}, (_, index) => index + 1).map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Render guestaccount outside the loop */}
                                <div className={classes.guestaccount}>
                                    <strong>This room accommodates up to guests {product.max_occupancy}</strong>
                                </div>

                                <div className={classes.price}>
                                    <p>
                                        Price from: <strong>{product.prices}</strong>
                                    </p>

                                    {!booking[product.id] && showContinue && selectedProductForBooking === product.id && (
                                        <div className={classes.bookingDetails}>
                                            <table>
                                                {Array.from({length: selectedRoomCounts[product.id] || 0}, (_, index) => (
                                                    <tbody key={index}>
                                                    <tr>
                                                        <td>
                                                            <select
                                                                id={`guestChoiceAdults_${index}`}
                                                                className={classes.conform}
                                                                value={(roomGuests[index] && roomGuests[index].adults) || 1}
                                                                onChange={(e) => handleGuestChange(e, index, 'adults')}
                                                            >
                                                                {Array.from({length: product.adults}, (_, idx) => idx + 1).map((value) => (
                                                                    <option key={value} value={value}>
                                                                        {value} adult,
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select
                                                                id={`guestChoiceChildren_${index}`}
                                                                className={classes.conform}
                                                                value={(roomGuests[index] && roomGuests[index].children) || 0}
                                                                onChange={(e) => handleGuestChange(e, index, 'children')}
                                                            >
                                                                {Array.from({length: product.children}, (_, idx) => idx).map((value) => (
                                                                    <option key={value} value={value}>
                                                                        {value} children
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </td>
                                                        <td>
                                                            x <strong>{product.prices}</strong>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                ))}
                                            </table>

                                            <button className={classes.btn} onClick={(e) => {
                                                handleContinue(e, product.id); // Pass the product ID to handleContinue
                                            }}> Continue
                                            </button>

                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className={classes.rightdata}>
                                <div>
                                    {booking[product.id] && (
                                        <div className={classes.hideandshow}>
                                            <div className={classes.dataflex}>
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Rooms</th>
                                                        <th>Adults</th>
                                                        <th>Children</th>
                                                        <th>Price</th>
                                                    </tr>
                                                    </thead>
                                                    {Array.from({length: selectedRoomCounts[product.id] || 0}, (_, index) => (
                                                        <tbody key={index}>
                                                        <tr>
                                                            <td>Room {index + 1}</td>
                                                            <td>
                                                                <select
                                                                    id={`guestChoiceAdults_${index}`}
                                                                    className={classes.formcontrol}
                                                                    value={(roomGuests[index] && roomGuests[index].adults) || 1}
                                                                    onChange={(e) => handleGuestChange(e, index, 'adults')}
                                                                >
                                                                    {Array.from({length: product.adults}, (_, idx) => idx + 1).map((value) => (
                                                                        <option key={value} value={value}>
                                                                            {value}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select
                                                                    id={`guestChoiceChildren_${index}`}
                                                                    className={classes.formcontrol}
                                                                    value={(roomGuests[index] && roomGuests[index].children) || 0}
                                                                    onChange={(e) => handleGuestChange(e, index, 'children')}
                                                                >
                                                                    {Array.from({length: product.children}, (_, idx) => idx).map((value) => (
                                                                        <option key={value} value={value}>
                                                                            {value}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                            <td>{product.prices}</td>
                                                        </tr>
                                                        </tbody>
                                                    ))}
                                                </table>
                                            </div>
                                            <div className={classes.groupbutton}>
                                                <button className={classes.btn} type="button"
                                                        onClick={() => handleClear(product.id)}>
                                                    CANCEL
                                                </button>
                                                <button className={classes.btn} type="button"
                                                        onClick={() => handleBookClick(product.id)}>
                                                    BOOK
                                                </button>
                                            </div>
                                            <div className={classes.roomtext}>
                                                <p>*Select number of adults and children for each room. Price may change
                                                    and will be calculated based on your selection.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {!product.hide && (
                                    <div>
                                        <div className={classes.images}>
                                             {product.images.map((image, index) => (
                <img key={index} src={image.image} alt={product.type} style={{ maxWidth: '200px' }} />
            ))}</div>
                                        <div>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomsPage;
