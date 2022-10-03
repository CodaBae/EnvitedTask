import React from "react";
import './styles.css'
import { IoCalendarOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'


const Event = () => {
    return (
        <div>
            <div className="event">
                <div className="event-container">

                </div>
            </div>
            <div className="birtday-cont">
                <div className="birthday">
                    Birthday Bash
                </div>
                <div className="b-s">
                    Hosted bt Elysia
                </div>
                <div className="icon__">
                    <div className="page">
                        <div className="icon">
                            <IoCalendarOutline />
                        </div>
                        <div className='d__'>
                            <div className="date">
                                18 August 6:00PM
                            </div>
                            <div className='time'>
                                to 19 August 1:00PM UTC +10
                            </div>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>

                <div className="icon__">
                    <div className="page">
                        <div className="icon">
                            <IoCalendarOutline />
                        </div>
                        <div className='d__'>
                            <div className="date">
                                Street name
                            </div>
                            <div className='time'>
                                Suburb, State, Postcode
                            </div>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default Event