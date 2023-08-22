import classes from './RoomsPage.module.css';
import {useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const RoomsPage = () => {


    const [roomGuests, setRoomGuests] = useState({});
    const [selectedRoomCounts, setSelectedRoomCounts] = useState({});
    const [booking, setBooking] = useState({});




    // const handleClear = (productId) => {
    //     setSelectedRoomCounts((prevCounts) => {
    //         const updatedCounts = {...prevCounts};
    //         delete updatedCounts[productId];
    //         return updatedCounts;
    //     });
    //
    //     // Update the booking state to hide the "BOOK" button for the specific productId
    //     setBooking((prevBooking) => ({
    //         ...prevBooking,
    //         [productId]: false,
    //     }));
    // };



    // const handleBookClick = (productId) => {
    //     setBooking((prevBooking) => ({
    //         ...prevBooking,
    //         [productId]: false, // Set booking to false for the specific productId
    //     }));
    //     setShowContinue((prevBooking) => ({
    //         ...prevBooking,
    //         [productId]: true, // Set booking to false for the specific productId
    //     }));
    // };

    const handleGuestChange = (event, roomId, guestType) => {
        const updatedRoomGuests = {...roomGuests};
        updatedRoomGuests[roomId] = {
            ...updatedRoomGuests[roomId],
            [guestType]: parseInt(event.target.value, 10),
        };
        setRoomGuests(updatedRoomGuests);
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

                    <div className={classes.rooms} key={product.id}>
                        <div className={classes.header}>
                            <strong>{product.type}</strong>
                        </div>
                        <div className={classes.roombody}>
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


                            </div>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default RoomsPage;
