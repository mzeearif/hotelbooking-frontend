import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";

import BookingConfirmationPage from "./pages/BookingConfirmation.Page";


function App() {
const selectedRooms = [
        // ... your selectedRooms data ...
    ];
    const selectedExtras = [
        // ... your selectedExtras data ...
    ];

    return (
        <div className='app' style={{maxWidth: 900}}>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    {/*<Route path="/bookings">*/}
                    {/*    <BookingPage />*/}
                    {/*</Route>*/}

                    <Route path="/room">
                        <RoomsPage/>
                    </Route>
                     <Route path="/booking-confirmation" component={BookingConfirmationPage} />
            {/*        <Route path="/booking-confirmation" render={(props) => (*/}
            {/*    <BookingConfirmationPage {...props} selectedRooms={selectedRooms} selectedExtras={selectedExtras} />*/}
            {/*)} />*/}
                </Switch>
            </Layout>

        </div>
    );
}

export default App;
