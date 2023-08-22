import classes from "./HomePage.module.css";
import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
const HomePage = () =>{
     const [guestChoice, setGuestChoice] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
const history = useHistory();
  const handleGuestChoiceChange = (event) => {
    setGuestChoice(event.target.value);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleSearch = () => {
        // setShowHomepage(false);
        // Perform search based on the input values
        history.push('/rooms')
        console.log('Searching...');
    };
    return(
        <div className={classes.homepage}>
            <h4 className={classes.hometitle}>Please enter the dates of your stay to check availability</h4>
             <form  className={classes.inputfields} >
                <div style={{width:500}} className={classes.label}>
          <label htmlFor="guestChoice">Guests</label><br/>
          <select id="guestChoice" value={guestChoice} onChange={handleGuestChoiceChange} className={classes.formcontrol}>
            {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

                <div style={{width:1000}} className={classes.label}>
          <label htmlFor="checkInDate">Check-in date</label><br/>
          <input type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange} className={classes.formcontrol}/>


        </div>

                <div style={{width:1000}} className={classes.label}>
          <label htmlFor="checkOutDate" >Check-out date</label> <br/>

            <input type="date" id="checkOutDate" value={checkOutDate} onChange={handleCheckOutDateChange} className={classes.formcontrol}/>


        </div>

                <button className={classes.btndefault}><Link to="/room">Search</Link></button>
            </form>
        </div>
    )
}
export default HomePage