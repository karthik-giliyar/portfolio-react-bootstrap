import React from "react";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>
                    Web development and websites promptions
                </h1>
                <Typed
                    className="typed-text"
                    strings={['Web design','Web development','Facebook ads','Google ads']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#"className="contact-me">Contact me</a>

            </div>
        </div>
    )
}

export default Header
