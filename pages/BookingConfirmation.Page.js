import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import classes from "./BookingConfirmation.module.css";
import ExtraPage from "./ExtraPage";
const BookingConfirmationPage = () => {
    const location = useLocation();
    const { selectedRooms,roomType } = location.state;
    const roomtotalPrice = selectedRooms.reduce((total, room) => {
        const numericPrice = parseFloat(room.price.replace('$', ''));
        return total + numericPrice;
    }, 0);
  const [extraTotalPrice, setExtraTotalPrice] = useState(
        parseFloat(localStorage.getItem("extraTotalPrice")) || 0
    );
 const handleExtraTotalChange = (extraTotal) => {
        setExtraTotalPrice(extraTotal);
    };
    const totalPrice = roomtotalPrice + extraTotalPrice;

    return (
        <div>
            <form >
                <div className={classes.form}>
            <h3>Your Booking</h3>
                <div className={classes.link}><a href="#">change dates</a></div>

                <div className={classes.roomdate}>
                    <p>
                        Check-in date: <br/>
                        Check-out date:<br/>
                        For
                    </p>
                    <p>
                        10.08.2023<br/>
                        12.08.2023<br/>
                        {selectedRooms.length} rooms
                    </p>
                </div>
                <div className={classes.roomchange}>

                    <strong>{roomType}</strong>
                    <a href="#" className="hbSelectorRooms">change rooms</a>
                        </div>
                <div className={classes.roomchange1}>
                    <ul>
                    {selectedRooms.map((room, index) => (
                        <li key={index}>
                            <div className={classes.roomadults}>
                            <p> {room.adults} adults,  </p>
                            <p>{room.children} children</p>
                                </div>
                            <p>{room.price}</p>
                        </li>
                    ))}
                </ul>

                </div>
                    </div>
                <div className={classes.extra} >
                    <div className={classes.left} style={{width:450}}><p>See total booking price and enter promo code if available.</p></div>
                    <div className={classes.right} >
                        <h3>
                            Extras
                        </h3>
                        <ExtraPage onExtraTotalChange={handleExtraTotalChange}/>
                        <div className={classes.total}>
                            <p>Room(s) Price  </p>
                            <p>{roomtotalPrice.toFixed(2)}$</p>
                        </div>
                        <div className={classes.total}>
                            <p>Total Price  (extra price + room price)</p>
                            <p>{totalPrice}$</p>
                        </div>

                    </div>
                </div>
                <div className={classes.checkout}>
                    <button className={classes.btn} type='button'>BACK</button>
                     <button className={classes.btn} type='button'>CHECKOUT</button>
                </div>

            </form>
            <div>
                <h3></h3>


            </div>
        </div>
    );
};

export default BookingConfirmationPage;