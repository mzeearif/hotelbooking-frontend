import {useState} from "react";
import {Fragment} from "react";
import {Link, useHistory} from "react-router-dom";
// import userimage from "../../assets/images/images.jpg";
import classes from "./MainNavigation.module.css";
import {useEffect} from "react";
import './MainNavigation.css';


const MainNavigation = () => {
    const [guestChoice, setGuestChoice] = useState(1);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [showHomepage, setShowHomepage] = useState(true);
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
        setShowHomepage(false);
        // Perform search based on the input values
        history.push('/rooms')
        console.log('Searching...');
    };
    return (
        <Fragment>
            <div>
                <div className={classes.header}>
                    <div className={classes.leftitem}>

                        <Link className={classes.btn}><i className="bi bi-house-fill"></i></Link>
                        <div className={classes.choices}>

                            <div className="dropdown">
                                <button
                                    className="btn  dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Step 1 - When and Who
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Step 1 - When and Who
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Step 2 - Rooms
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Step 3 - Extras
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Step 4 - Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Step 5 - Preview
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Step 6 - Finish
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={classes.right_item}>
                        <button className={classes.btn}>LOGIN</button>
                    </div>
                </div>
               {/* {showHomepage && (<div className={classes.homepage}>*/}
               {/*     <h4 className={classes.hometitle}>Please enter the dates of your stay to check availability</h4>*/}
               {/*     <form className={classes.inputfields}>*/}
               {/*         <div style={{width: 500}}>*/}
               {/*             <label htmlFor="guestChoice"className={classes.label}>Guests</label><br/>*/}
               {/*             <select id="guestChoice" value={guestChoice} onChange={handleGuestChoiceChange}*/}
               {/*                     className={classes.formcontrol}>*/}
               {/*                 {Array.from({length: 10}, (_, index) => index + 1).map((value) => (*/}
               {/*                     <option key={value} value={value}>*/}
               {/*                         {value}*/}
               {/*                     </option>*/}
               {/*                 ))}*/}
               {/*             </select>*/}
               {/*         </div>*/}

               {/*         <div style={{width: 1000}}>*/}
               {/*             <label htmlFor="checkInDate"className={classes.label}>Check-in date</label><br/>*/}
               {/*             <input type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange}*/}
               {/*                    className={classes.formcontrol}/>*/}


               {/*         </div>*/}

               {/*         <div style={{width: 1000}}>*/}
               {/*             <label htmlFor="checkOutDate" className={classes.label}>Check-out date</label> <br/>*/}

               {/*             <input type="date" id="checkOutDate" value={checkOutDate}*/}
               {/*                    onChange={handleCheckOutDateChange} className={classes.formcontrol}/>*/}


               {/*         </div>*/}

               {/*         <button onClick={handleSearch} className={classes.btndefault}>Search</button>*/}
               {/*     </form>*/}
               {/* </div>)}*/}
               {/*{!showHomepage && (*/}
               {/*    <div className={classes.homepage2}>*/}
               {/*     <p>*/}
               {/*         <strong className={classes.text1}>Available rooms from</strong>*/}
               {/*         <br/>*/}
               {/*         Friday, July 28th, 2023 to*/}
               {/*         Saturday, July 29th, 2023*/}

               {/*     </p>*/}
               {/* </div>)}*/}
                {/*{" "}*/}
                {/*<link*/}
                {/*  href="core/framework/libs/pj/css/pj.bootstrap.min.css"*/}
                {/*  type="text/css"*/}
                {/*  rel="stylesheet"*/}
                {/*/>*/}
                {/*<link*/}
                {/*  href="index.php?controller=pjFront&action=pjActionLoadCss&cid=1"*/}
                {/*  type="text/css"*/}
                {/*  rel="stylesheet"*/}
                {/*/>{" "}*/}
                {/*<div>*/}
                {/*  <div style={{ maxWidth: 1060 }}>*/}
                {/*    <div id="pjWrapperHotelBooking_10">*/}
                {/*      <div*/}
                {/*        id="hbContainer_1"*/}
                {/*        className="hbContainer container-fluid pjHbContainer"*/}
                {/*      >*/}
                {/*        <div className="panel panel-default clearfix pjHbPanel">*/}
                {/*          <div className="panel-heading pjHbPanelHead">*/}
                {/*            <div className="row">*/}
                {/*              <div className="col-md-1 col-sm-1 col-xs-2">*/}
                {/*                <a*/}
                {/*                  href="#"*/}
                {/*                  className="btn btn-default pjHbBtnHome hbSelectorSearch"*/}
                {/*                >*/}
                {/*                  <span*/}
                {/*                    className="glyphicon glyphicon-home"*/}
                {/*                    aria-hidden="true"*/}
                {/*                  />*/}
                {/*                </a>*/}
                {/*              </div>*/}
                {/*              /!* /.col- *!/*/}
                {/*              <div className="col-md-6 col-sm-6 col-xs-10">*/}
                {/*                <div className="btn-group pjHbNav">*/}
                {/*                  <button*/}
                {/*                    type="button"*/}
                {/*                    className="btn btn-default dropdown-toggle pjHbBtnNav"*/}
                {/*                    data-toggle="dropdown"*/}
                {/*                    aria-expanded="false"*/}
                {/*                  >*/}
                {/*                    Step 1 - When and Who <span className="caret" />*/}
                {/*                  </button>*/}
                {/*                  <ul className="dropdown-menu text-uppercase" role="menu">*/}
                {/*                    <li>*/}
                {/*                      <Link*/}
                {/*                        href="#"*/}
                {/*                        className="btn btn-link pjHbBtn hbSelectorSearch pjHbBtnActive"*/}
                {/*                        role="button"*/}
                {/*                        style={{ textAlign: "left" }}*/}
                {/*                      >*/}
                {/*                        Step 1 - When and Who*/}
                {/*                      </Link>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                      <a*/}
                {/*                        href="#"*/}
                {/*                        className="btn btn-link pjHbBtn hbSelectorRooms disabled"*/}
                {/*                        role="button"*/}
                {/*                        style={{ textAlign: "left" }}*/}
                {/*                      >*/}
                {/*                        Step 2 - Rooms*/}
                {/*                      </a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                      <a*/}
                {/*                        href="#"*/}
                {/*                        className="btn btn-link pjHbBtn hbSelectorExtras disabled"*/}
                {/*                        role="button"*/}
                {/*                        style={{ textAlign: "left" }}*/}
                {/*                      >*/}
                {/*                        Step 3 - Extras*/}
                {/*                      </a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                      <a*/}
                {/*                        href="#"*/}
                {/*                        className="btn btn-link pjHbBtn hbSelectorCheckout disabled"*/}
                {/*                        role="button"*/}
                {/*                        style={{ textAlign: "left" }}*/}
                {/*                      >*/}
                {/*                        Step 4 - Checkout*/}
                {/*                      </a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                      <a*/}
                {/*                        href="#"*/}
                {/*                        className="btn btn-link pjHbBtn hbSelectorPreview disabled"*/}
                {/*                        role="button"*/}
                {/*                        style={{ textAlign: "left" }}*/}
                {/*                      >*/}
                {/*                        Step 5 - Preview*/}
                {/*                      </a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                      <Link*/}
                {/*                        href="#"*/}
                {/*                        className="btn btn-link pjHbBtn disabled"*/}
                {/*                        role="button"*/}
                {/*                        style={{ textAlign: "left" }}*/}
                {/*                      >*/}
                {/*                        Step 6 - Finish*/}
                {/*                      </Link>*/}
                {/*                    </li>*/}
                {/*                  </ul>*/}
                {/*                  /!* /.dropdown-menu text-uppercase *!/*/}
                {/*                </div>*/}
                {/*                /!* /.btn-group pjHbNav *!/{" "}*/}
                {/*              </div>*/}
                {/*              /!* /.col- *!/*/}
                {/*              <div className="col-md-5 col-sm-5 col-xs-12">*/}
                {/*                <button*/}
                {/*                  type="button"*/}
                {/*                  className="btn btn-default pjHbBtnNav pjHbBtnClient pjHbBtnLogin"*/}
                {/*                >*/}
                {/*                  <span className="title">Login</span>*/}
                {/*                </button>*/}
                {/*              </div>*/}
                {/*              /!* /.col- *!/*/}
                {/*            </div>*/}
                {/*            /!* /.row *!/*/}
                {/*          </div>*/}
                {/*          /!* /.panel-heading pjHbPanelHead *!/*/}
                {/*          <div className="panel-body pjHbPanelBody">*/}
                {/*            <h4 className="pjHbPanelTitle">*/}
                {/*              Please enter the dates of your stay to check availability*/}
                {/*            </h4>*/}
                {/*            <br />*/}
                {/*            <div className="row">*/}
                {/*              <form*/}
                {/*                action="https://demo.phpjabbers.com/1690436361_516/index.php?controller=pjFrontPublic&action=pjActionRoom"*/}
                {/*                method="post"*/}
                {/*                className="hbSelectorSearchForm pjHbFormCheck"*/}
                {/*                noValidate="novalidate"*/}
                {/*              >*/}
                {/*                <input type="hidden" name="step_search" defaultValue={1} />*/}
                {/*                <div*/}
                {/*                  id="pjHbCalendarLocale"*/}
                {/*                  style={{ display: "none" }}*/}
                {/*                  data-months="January_February_March_April_May_June_July_August_September_October_November_December"*/}
                {/*                  data-days="Su_Mo_Tu_We_Th_Fr_Sa"*/}
                {/*                />*/}
                {/*                <div className="col-lg-2 col-md-2 col-sm-2">*/}
                {/*                  <div className="form-group">*/}
                {/*                    <label>Guests</label>*/}
                {/*                    <select*/}
                {/*                      className="form-control"*/}
                {/*                      name="guests"*/}
                {/*                      data-msg-required="Guests is required"*/}
                {/*                    >*/}
                {/*                      <option value={1}>1</option>*/}
                {/*                      <option value={2}>2</option>*/}
                {/*                      <option value={3}>3</option>*/}
                {/*                      <option value={4}>4</option>*/}
                {/*                      <option value={5}>5</option>*/}
                {/*                      <option value={6}>6</option>*/}
                {/*                      <option value={7}>7</option>*/}
                {/*                      <option value={8}>8</option>*/}
                {/*                      <option value={9}>9</option>*/}
                {/*                      <option value={10}>10</option>{" "}*/}
                {/*                    </select>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*                /!* /.col-md-3 *!/*/}
                {/*                <div className="col-lg-4 col-md-4 col-sm-4">*/}
                {/*                  <div className="form-group pjHbCalendar">*/}
                {/*                    <label htmlFor="from">Check-in date</label>*/}
                {/*                    <div className="input-group pjHbCalendarFrom">*/}
                {/*                      <input*/}
                {/*                        type="text"*/}
                {/*                        className="form-control"*/}
                {/*                        name="date_from"*/}
                {/*                        autoComplete="off"*/}
                {/*                        defaultValue="28.07.2023"*/}
                {/*                        data-dformat="dd.mm.yy"*/}
                {/*                        data-fday={1}*/}
                {/*                        data-msg-required="Check-in date is required"*/}
                {/*                        readOnly="true"*/}
                {/*                      />*/}
                {/*                      <span className="input-group-addon">*/}
                {/*                        <span*/}
                {/*                          className="glyphicon glyphicon-calendar"*/}
                {/*                          aria-hidden="true"*/}
                {/*                        />*/}
                {/*                      </span>*/}
                {/*                    </div>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*                /!* /.col-md-3 *!/*/}
                {/*                <div className="col-lg-4 col-md-4 col-sm-4">*/}
                {/*                  <div className="form-group pjHbCalendar">*/}
                {/*                    <label htmlFor="to">Check-out date</label>*/}
                {/*                    <div*/}
                {/*                      className="input-group pjHbCalendarTo"*/}
                {/*                      data-year={2023}*/}
                {/*                      data-month={7}*/}
                {/*                      data-day={28}*/}
                {/*                    >*/}
                {/*                      <input*/}
                {/*                        type="text"*/}
                {/*                        className="form-control"*/}
                {/*                        name="date_to"*/}
                {/*                        autoComplete="off"*/}
                {/*                        defaultValue="29.07.2023"*/}
                {/*                        data-dformat="dd.mm.yy"*/}
                {/*                        data-fday={1}*/}
                {/*                        data-msg-required="Check-out date is required"*/}
                {/*                        readOnly="true"*/}
                {/*                      />*/}
                {/*                      <span className="input-group-addon">*/}
                {/*                        <span*/}
                {/*                          className="glyphicon glyphicon-calendar"*/}
                {/*                          aria-hidden="true"*/}
                {/*                        />*/}
                {/*                      </span>*/}
                {/*                    </div>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*                /!* /.col-md-2 *!/*/}
                {/*                <div className="col-lg-2 col-sm-4">*/}
                {/*                  <div className="form-group">*/}
                {/*                    <label>&nbsp;</label>*/}
                {/*                    <div className="input-group">*/}
                {/*                      <button*/}
                {/*                        type="submit"*/}
                {/*                        className="btn btn-default btn-block"*/}
                {/*                      >*/}
                {/*                        Search*/}
                {/*                      </button>*/}
                {/*                    </div>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*                /!* /.col-md-2 *!/*/}
                {/*              </form>*/}
                {/*            </div>*/}
                {/*            /!* /.row *!/*/}
                {/*          </div>*/}
                {/*          /!* /.panel-body pjHbPanelBody *!/*/}
                {/*        </div>*/}
                {/*        /!* /.panel pjHbPanel *!/*/}
                {/*      </div>*/}
                {/*      <div*/}
                {/*        className="modal fade"*/}
                {/*        id="pjHbModalMaxOccupancy"*/}
                {/*        tabIndex={-1}*/}
                {/*        role="dialog"*/}
                {/*        aria-labelledby="myModalLabel"*/}
                {/*        aria-hidden="true"*/}
                {/*      >*/}
                {/*        {" "}*/}
                {/*        <div className="modal-dialog">*/}
                {/*          {" "}*/}
                {/*          <div className="modal-content">*/}
                {/*            <div className="modal-body">*/}
                {/*              <div className="te">*/}
                {/*                Summary of adults and children should not exceed maximum*/}
                {/*                occupancy.*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*              <button*/}
                {/*                type="button"*/}
                {/*                className="btn btn-default"*/}
                {/*                data-dismiss="modal"*/}
                {/*              >*/}
                {/*                Close*/}
                {/*              </button>*/}
                {/*            </div>{" "}*/}
                {/*          </div>*/}
                {/*          /!* /.modal-content *!/{" "}*/}
                {/*        </div>*/}
                {/*        /!* /.modal-dialog *!/*/}
                {/*      </div>*/}
                {/*      /!* /.modal *!/*/}
                {/*      <div*/}
                {/*        className="modal fade"*/}
                {/*        id="pjHbModalWrongCaptcha"*/}
                {/*        tabIndex={-1}*/}
                {/*        role="dialog"*/}
                {/*        aria-labelledby="myModalLabel"*/}
                {/*        aria-hidden="true"*/}
                {/*      >*/}
                {/*        {" "}*/}
                {/*        <div className="modal-dialog">*/}
                {/*          {" "}*/}
                {/*          <div className="modal-content">*/}
                {/*            {" "}*/}
                {/*            <div className="modal-body">*/}
                {/*              <div className="text-danger" />*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*              <button*/}
                {/*                type="button"*/}
                {/*                className="btn btn-default"*/}
                {/*                data-dismiss="modal"*/}
                {/*              >*/}
                {/*                Close*/}
                {/*              </button>*/}
                {/*            </div>{" "}*/}
                {/*          </div>*/}
                {/*          /!* /.modal-content *!/{" "}*/}
                {/*        </div>*/}
                {/*        /!* /.modal-dialog *!/*/}
                {/*      </div>*/}
                {/*      /!* /.modal *!/*/}
                {/*      <div*/}
                {/*        className="modal fade"*/}
                {/*        id="pjHbModalAlreadyBooked"*/}
                {/*        tabIndex={-1}*/}
                {/*        role="dialog"*/}
                {/*        aria-labelledby="myModalLabel"*/}
                {/*        aria-hidden="true"*/}
                {/*      >*/}
                {/*        {" "}*/}
                {/*        <div className="modal-dialog">*/}
                {/*          {" "}*/}
                {/*          <div className="modal-content">*/}
                {/*            {" "}*/}
                {/*            <div className="modal-body">*/}
                {/*              <div className="text-danger" />*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*              <button*/}
                {/*                type="button"*/}
                {/*                className="btn btn-default"*/}
                {/*                data-dismiss="modal"*/}
                {/*              >*/}
                {/*                Close*/}
                {/*              </button>*/}
                {/*            </div>{" "}*/}
                {/*          </div>*/}
                {/*          /!* /.modal-content *!/{" "}*/}
                {/*        </div>*/}
                {/*        /!* /.modal-dialog *!/*/}
                {/*      </div>*/}
                {/*      /!* /.modal *!/*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    style={{ display: "none" }}*/}
                {/*    title="Terms and Conditions"*/}
                {/*    id="hbTerms_1"*/}
                {/*  />*/}
                {/*</div>{" "}*/}
            </div>


            {/*/!* <header className={classes.header}> *!/*/}


            {/*  <header*/}
            {/*    id="header"*/}
            {/*    className="header fixed-top d-flex align-items-center"*/}
            {/*  >*/}
            {/*    <div className="d-flex align-items-center justify-content-between">*/}

            {/*        <Link to="/home" className="logo d-flex align-items-center"*/}
            {/*        onClick={() => {*/}
            {/*          setTitle("Dashboard");}}>*/}
            {/*          <div className="d-none d-lg-block socio-node">*/}
            {/*           <span>S</span>*/}
            {/*            <span className="o">o</span>*/}
            {/*            <span>c</span>*/}
            {/*            <span className="i">i</span>*/}
            {/*            <span className="oo">o</span>*/}
            {/*            <span className="n">N</span>*/}
            {/*            <span className="ooo">o</span>*/}
            {/*            <span className="d">d</span>*/}
            {/*            <span>e</span>*/}
            {/*          </div>*/}
            {/*        </Link>*/}

            {/*      <hr />*/}
            {/*      <i*/}
            {/*        className="bi bi-list toggle-sidebar-btn "*/}
            {/*        onClick={toggleSidebar}*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    /!* End Logo *!/*/}
            {/*    <div className="pagetitle mb-0 d-flex w-100">*/}

            {/*        <span >*/}
            {/*          <h1 className="ms-2 mt-2 text-white">{title}</h1>*/}
            {/*        </span>*/}

            {/*      <ul*/}
            {/*        className="d-flex mt-3 mx-auto text-nowrap hide-nav"*/}
            {/*        style={{ listStyle: "none" }}*/}
            {/*      >*/}

            {/*          <li className="ms-4">*/}
            {/*            <NavLink to="/describe" className={({ isActive }) =>*/}
            {/*        isActive ? activeClassName : undefined }*/}
            {/*       onClick={() => {*/}
            {/*    setTitle("Post a Situation");}} > */}
            {/*              <i className="bi bi-pencil-fill" />*/}
            {/*              &nbsp;&nbsp;Post a Situation*/}
            {/*            </NavLink>*/}
            {/*          </li>*/}

            {/*          <li className="ms-4">*/}
            {/*            <NavLink to="/pick"  className={({ isActive }) =>  isActive ? activeClassName : undefined }*/}
            {/*            onClick={() => {setTitle("Pick a Situation");}}>*/}
            {/*              <i className="bi bi-arrow-up-square-fill" />*/}
            {/*              &nbsp;&nbsp;Pick a Situation*/}
            {/*            </NavLink>*/}
            {/*          </li>*/}


            {/*          <li className="ms-4">*/}
            {/*            <NavLink to="/situation" className={({ isActive }) =>  isActive ? activeClassName : undefined }*/}
            {/*            onClick={() => {*/}
            {/*    setTitle("Situation room");}}>*/}
            {/*              <i className="bi bi-arrow-down-square-fill" />*/}
            {/*              &nbsp;&nbsp;Situation room*/}
            {/*            </NavLink>*/}
            {/*          </li>*/}

            {/*      </ul>*/}
            {/*    </div>*/}
            {/*    /!* End Search Bar *!/*/}
            {/*    <nav className="header-nav ms-auto">*/}
            {/*      <ul className="d-flex align-items-center">*/}

            {/*          <li className="nav-item d-block d-lg-none">*/}
            {/*            <Link*/}
            {/*              className="nav-link nav-icon search-bar-toggle"*/}
            {/*              to="/#"*/}
            {/*            >*/}
            {/*              {" "}*/}
            {/*            </Link>*/}
            {/*          </li>*/}

            {/*        /!* End Search Icon*!/*/}

            {/*          <li className="nav-item dropdown">*/}
            {/*            <Link*/}
            {/*              className="nav-link nav-icon"*/}
            {/*              to="/#"*/}
            {/*              data-bs-toggle="dropdown"*/}
            {/*            >*/}
            {/*              <i className="bi bi-bell"></i>*/}
            {/*              <span className="badge bg-danger badge-number">0</span>*/}
            {/*            </Link>*/}
            {/*            <ul*/}
            {/*              className="dropdown-menu dropdown-notification dropdown-menu-end dropdown-menu-arrow notifications"*/}
            {/*              data-popper-placement="bottom-end"*/}
            {/*              style={{*/}
            {/*                position: "absolute",*/}
            {/*                inset: "0px 0px auto auto",*/}
            {/*                margin: "0px",*/}
            {/*                transform: "translate3d(-25px, 35px, 0px)",*/}
            {/*              }}*/}
            {/*            >*/}
            {/*              <li className="pb-5 pt-3">*/}
            {/*                <h4>Notification</h4>*/}
            {/*              </li>*/}
            {/*              <li className="notification-item ps-3">*/}
            {/*                <div className="d-flex">*/}
            {/*                  <i className="bi bi-bell" />*/}
            {/*                  <span className="ps-3 px-3">*/}
            {/*                    <strong> Karen Hope </strong> moved task “*/}
            {/*                    <strong className="text-danger">*/}
            {/*                      {" "}*/}
            {/*                      User Research{" "}*/}
            {/*                    </strong>*/}
            {/*                    “ from <strong> On Progress </strong> to*/}
            {/*                    <strong> Done</strong>*/}
            {/*                  </span>*/}
            {/*                </div>*/}
            {/*                <span className="ps-1">*/}
            {/*                  &nbsp;&nbsp;&nbsp; 2 March 2021, 13:45 PM*/}
            {/*                </span>*/}
            {/*              </li>*/}
            {/*              <li className="notification-item ps-3">*/}
            {/*                <div className="d-flex">*/}
            {/*                  <i className="bi bi-bell" />*/}
            {/*                  <span className="ps-3 px-3">*/}
            {/*                    <strong> Samantha William </strong> add new*/}
            {/*                    <strong> 4 </strong> attached files on task “*/}
            {/*                    <strong className="text-warning">*/}
            {/*                      Photo’ s Assets*/}
            {/*                    </strong>*/}
            {/*                    “*/}
            {/*                  </span>*/}
            {/*                </div>*/}
            {/*                <span className="ps-1">*/}
            {/*                  &nbsp;&nbsp;&nbsp; 2 March 2021, 13:45 PM*/}
            {/*                </span>*/}
            {/*              </li>*/}
            {/*              <li className="notification-item ps-3">*/}
            {/*                <div className="d-flex">*/}
            {/*                  <i className="bi bi-bell" />*/}
            {/*                  <span className="ps-3 px-3">*/}
            {/*                    <strong> Tony Soap </strong> invite you in task “*/}
            {/*                    <strong className="text-primary">*/}
            {/*                      {" "}*/}
            {/*                      Wireframing{" "}*/}
            {/*                    </strong>*/}
            {/*                    “ and “*/}
            {/*                    <strong className="text-success">*/}
            {/*                      {" "}*/}
            {/*                      Hi-fidelity{" "}*/}
            {/*                    </strong>*/}
            {/*                    “*/}
            {/*                  </span>*/}
            {/*                </div>*/}
            {/*                <span className="ps-1">*/}
            {/*                  &nbsp;&nbsp;&nbsp; 2 March 2021, 13:45 PM*/}
            {/*                </span>*/}
            {/*              </li>*/}
            {/*              <li className="notification-item ps-3">*/}
            {/*                <div className="d-flex">*/}
            {/*                  <i className="bi bi-bell" />*/}
            {/*                  <span className="ps-3 px-3">*/}
            {/*                    <strong> Samantha William </strong> created new*/}
            {/*                    <strong className="text-danger"> Task</strong>*/}
            {/*                  </span>*/}
            {/*                  <br />*/}
            {/*                </div>*/}
            {/*                <span className="ps-1">*/}
            {/*                  &nbsp;&nbsp;&nbsp; 2 March 2021, 13:45 PM*/}
            {/*                </span>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}

            {/*          <li className="nav-item dropdown pe-3">*/}
            {/*            <Link*/}
            {/*              className="nav-link nav-profile d-flex align-items-center pe-0"*/}
            {/*              to="/#"*/}
            {/*              data-bs-toggle="dropdown"*/}
            {/*            >*/}
            {/*             */}
            {/*              <img src={userimage} alt="" className="rounded-circle" />*/}
            {/*            </Link>*/}
            {/*            <ul className="dropdown-menu dropdown-profile dropdown-menu-end dropdown-menu-arrow profile">*/}

            {/*                <li>*/}
            {/*                  <Link*/}
            {/*                    className="dropdown-item d-flex align-items-center"*/}
            {/*                    to="/profile" onClick={() => {*/}
            {/*                      setTitle("My Profile");}}*/}
            {/*                  >*/}
            {/*                    <i className="bi bi-person" />*/}
            {/*                    <span>My Profile</span>*/}
            {/*                  </Link>*/}
            {/*                </li>*/}

            {/*              <li>*/}
            {/*                <hr className="dropdown-divider" />*/}
            {/*              </li>*/}
            {/*             (*/}
            {/*                <li>*/}
            {/*                  <Link*/}
            {/*                    className="dropdown-item d-flex align-items-center"*/}
            {/*                    to="/profilesetup" onClick={() => {*/}
            {/*                      setTitle("Account Settings");}}*/}
            {/*                  >*/}
            {/*                    <i className="bi bi-gear" />*/}
            {/*                    <span>Profile Setup</span>*/}
            {/*                  </Link>*/}
            {/*                </li>*/}

            {/*              <li>*/}
            {/*                <hr className="dropdown-divider" />*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <Link*/}
            {/*                  className="dropdown-item d-flex align-items-center"*/}
            {/*                  to="/#"*/}
            {/*                >*/}
            {/*                  <i className="bi bi-question-circle" />*/}
            {/*                  <span>Need Help?</span>*/}
            {/*                </Link>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <hr className="dropdown-divider" />*/}
            {/*              </li>*/}

            {/*                <li >*/}
            {/*                  <span*/}
            {/*                    className="dropdown-item d-flex align-items-center"*/}
            {/*                    */}
            {/*                  >*/}
            {/*                    <i className="bi bi-box-arrow-right" />*/}
            {/*                    <span >Sign Out</span>*/}
            {/*                  </span>*/}
            {/*                </li>*/}

            {/*            </ul>*/}
            {/*          </li>*/}


            {/*          <li className="nav-item dropdown pe-3">*/}
            {/*            <Link*/}
            {/*              className="nav-link nav-profile d-flex align-items-center pe-0"*/}
            {/*              to="/#"*/}
            {/*              data-bs-toggle="dropdown"*/}
            {/*            >*/}
            {/*              <span className="d-md-block dropdown-toggle ps-2 text-white">*/}
            {/*                EN*/}
            {/*              </span>{" "}*/}
            {/*            </Link>*/}
            {/*            /!* End Profile Iamge Icon *!/*/}
            {/*            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">*/}
            {/*              <li>*/}
            {/*                <Link*/}
            {/*                  className="dropdown-item d-flex align-items-center"*/}
            {/*                  to="/#"*/}
            {/*                >*/}
            {/*                  <span>GER</span>*/}
            {/*                </Link>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <hr className="dropdown-divider" />*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <Link*/}
            {/*                  className="dropdown-item d-flex align-items-center"*/}
            {/*                  to="/#"*/}
            {/*                >*/}
            {/*                  <span>US</span>*/}
            {/*                </Link>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <hr className="dropdown-divider" />*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <Link*/}
            {/*                  className="dropdown-item d-flex align-items-center"*/}
            {/*                  to="/#"*/}
            {/*                >*/}
            {/*                  <span>UK</span>*/}
            {/*                </Link>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <hr className="dropdown-divider" />*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <Link*/}
            {/*                  className="dropdown-item d-flex align-items-center"*/}
            {/*                  to="/#"*/}
            {/*                >*/}
            {/*                  <span>BR</span>*/}
            {/*                </Link>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*            /!* End Profile Dropdown Items *!/*/}
            {/*          </li>*/}

            {/*        /!* End Profile Nav *!/*/}
            {/*      </ul>*/}
            {/*    </nav>*/}
            {/*    /!* End Icons Navigation *!/*/}
            {/*  </header>*/}

            {/*/!* ======= Sidebar ======= *!/*/}
            {/*{ toggle && (*/}
            {/*  <div id="sidebar" className="sidebar" >*/}
            {/*    <ul className="sidebar-nav" id="sidebar-nav">*/}

            {/*        <li className="nav-item">*/}
            {/*          <Link  to="#"*/}
            {/*           className="nav-link collapsed"*/}
            {/*          //  id="nav-link"*/}
            {/*            data-bs-target="#components-nav"*/}
            {/*            data-bs-toggle="collapse"*/}
            {/*          >*/}
            {/*            <i className="bi bi-box-arrow-in-down text-danger"></i>*/}
            {/*           My Situation*/}
            {/*            <i className="bi bi-chevron-down ms-auto" />*/}
            {/*          </Link>*/}
            {/*          <ul*/}
            {/*            id="components-nav"*/}
            {/*            className="nav-content collapse"*/}
            {/*            data-bs-parent="#sidebar-nav"*/}
            {/*          >*/}
            {/*            <li >*/}
            {/*              <NavLink to="/drafted" className={({ isActive }) =>  isActive ? activeClassName : undefined }*/}
            {/*              onClick={() => {*/}
            {/*    setTitle("Drafted");}}>*/}
            {/*                Drafted*/}
            {/*              </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*              <NavLink to="./published" className={({ isActive }) =>  isActive ? activeClassName : undefined } onClick={() => {*/}
            {/*    setTitle("Published");}}>*/}
            {/*                Published*/}
            {/*              </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*              <NavLink to="/process" className={({ isActive }) =>  isActive ? activeClassName : undefined } onClick={() => {*/}
            {/*    setTitle("In-Process");}}>*/}
            {/*               In-Process*/}
            {/*              </NavLink>*/}
            {/*            </li>*/}
            {/*            <li >*/}
            {/*              <NavLink to="/completed" className={({ isActive }) =>  isActive ? activeClassName : undefined } onClick={() => {*/}
            {/*    setTitle("Completed");}}>*/}
            {/*                Completed*/}
            {/*              </NavLink>*/}
            {/*            </li>*/}
            {/*          </ul>*/}
            {/*        </li>*/}

            {/*      /!* End Components Nav *!/*/}

            {/*        <li className="nav-item">*/}
            {/*          <NavLink*/}
            {/*           className="nav-link collapsed"*/}
            {/*            data-bs-target="#forms-nav"*/}
            {/*            data-bs-toggle="collapse"*/}
            {/*            to="#"*/}
            {/*          >*/}
            {/*            <i className="bi bi-archive-fill text-primary"></i>*/}
            {/*            My Advice*/}
            {/*            <i className="bi bi-chevron-down ms-auto" />*/}
            {/*          </NavLink>*/}
            {/*          <ul*/}
            {/*            id="forms-nav"*/}
            {/*            className="nav-content collapse"*/}
            {/*            data-bs-parent="#sidebar-nav"*/}
            {/*          >*/}
            {/*            <li>*/}
            {/*              <NavLink to="/adviceprocess" className={({ isActive }) =>  isActive ? activeClassName : undefined } onClick={() => {*/}
            {/*    setTitle("In-Progress");}}>*/}
            {/*                In Progress*/}
            {/*              </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*              <NavLink to="/advicecomplete" className={({ isActive }) =>  isActive ? activeClassName : undefined } onClick={() => {*/}
            {/*    setTitle("Completed");}}>*/}
            {/*               Completed*/}
            {/*              </NavLink>*/}
            {/*            </li>*/}
            {/*          </ul>*/}
            {/*        </li>*/}

            {/*      /!* End Forms Nav *!/*/}

            {/*        <li className="nav-item">*/}
            {/*          <NavLink className="nav-link collapsed" to="/financials" onClick={() => {*/}
            {/*    setTitle("My Financials");}}>*/}
            {/*            <i className="bi bi-coin text-success"></i>*/}
            {/*           My Financials*/}
            {/*          </NavLink>*/}
            {/*        </li>*/}

            {/*      /!* End Tables Nav *!/*/}

            {/*        <li className="nav-item">*/}
            {/*          <NavLink className="nav-link collapsed" to="/account" onClick={() => {*/}
            {/*    setTitle("Account Settings");}}>*/}
            {/*            <i className="bi bi-person-fill-gear"></i>*/}
            {/*           Account Settings*/}
            {/*          </NavLink>*/}
            {/*        </li>*/}

            {/*      <div className="d-sm-none">*/}
            {/*         <li className="nav-heading">Dashboard</li>*/}

            {/*          <li className="nav-item">*/}
            {/*            <Link*/}
            {/*              className="nav-link collapsed"*/}
            {/*              data-bs-target="#charts-nav"*/}
            {/*              data-bs-toggle="collapse"*/}
            {/*              to="/describe"  onClick={() => {*/}
            {/*                setTitle("Post a Situation");}}*/}
            {/*            >*/}
            {/*              &nbsp;&nbsp;Post a Situation*/}
            {/*            </Link>*/}
            {/*          </li>*/}

            {/*          <li className="nav-item">*/}
            {/*            <Link*/}
            {/*              className="nav-link collapsed"*/}
            {/*              data-bs-target="#charts-nav"*/}
            {/*              data-bs-toggle="collapse"*/}
            {/*              to="/#"*/}
            {/*            >*/}
            {/*              &nbsp;&nbsp;<span>Pick a Situation</span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}

            {/*          <li className="nav-item">*/}
            {/*            <Link*/}
            {/*              className="nav-link collapsed"*/}
            {/*              data-bs-target="#charts-nav"*/}
            {/*              data-bs-toggle="collapse"*/}
            {/*              to="/#"*/}
            {/*            >*/}
            {/*              &nbsp;&nbsp;<span>Situation Room</span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}

            {/*      </div>*/}

            {/*      /!* <img className="logout-logo picture" src="./ASSETS/Group 7668.svg" /> *!/*/}
            {/*    </ul>*/}
            {/*    <footer id="footer" className="footers ms-0">*/}

            {/*        <div className="copyright text-center">*/}
            {/*          &nbsp;&nbsp;&nbsp;<Link to="#">Log Out</Link>*/}
            {/*        </div>*/}

            {/*    </footer>*/}
            {/*   */}
            {/*  </div>*/}
            {/*)}*/}
            {/*/!* End Sidebar*!/*/}
        </Fragment>
    );
};
export default MainNavigation;
