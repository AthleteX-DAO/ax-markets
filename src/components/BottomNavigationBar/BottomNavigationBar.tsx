import React from 'react';
// import './BottomNavigationBar.css';

const BottomNavigationBar: React.FC = () => {
    return (
        <div className="bottom-navigation-bar">
            <nav>
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default BottomNavigationBar;