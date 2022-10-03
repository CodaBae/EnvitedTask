import React from "react";
import './home.css'
import Image from '../../assets/img.png';
import Button from "../../components/Button";
import useMediaQuery from '@mui/material/useMediaQuery';


const Home = () => {
    const matches = useMediaQuery('(max-width: 768px)');

    return (
        <div className="container">
            <div className="img_cont">
                <div className="image" />
                {matches && <Button />}
            </div>
            <div className="side">
                <div className="text">
                    Imagine if <br />
                    SnapChat <br />
                    had events.
                </div>
                <div className='sub-text'>
                    Easily host and share events with your friends<br /> across any social media.
                </div>
                {!matches && <Button />}
            </div>
        </div>
    )
}

export default Home;