import React from 'react';

function Navigation() {
    

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <a>About me</a>
                </li>
                <li className="navigation-item">
                    <a>Portfolio</a>
                </li>
                <li className="navigation-item">
                    <a>Contact me</a>
                </li>
                <li className="navigation-item">
                    <a>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;