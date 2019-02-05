import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header-block">
            <h3 className="header-block__title">
                <a href="http://">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="header-block__links">
                <li>
                    <a href="http://">Characters</a>
                </li>
                <li>
                    <a href="http://">Houses</a>
                </li>
                <li>
                    <a href="http://">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;