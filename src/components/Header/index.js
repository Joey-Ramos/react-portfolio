import React from 'react';
import Navigation from '../Navigation';

function Header() {


    return (
        <header className="header-hero">
            <div className="header-container">
                <h1 className="header-title">Joey Ramos</h1>
            </div>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;