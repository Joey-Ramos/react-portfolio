import React from 'react';

function Navigation() {
    

    return (
        <div className="navigation-container">
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <a>
                            <p>Portfolio</p>
                        </a>
                    </li>
                    <li className="navigation-item">
                        <a>
                            <p>Contact me</p>
                        </a>
                    </li>
                    <li className="navigation-item">
                        <a>
                            <p>Resume</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navigation;