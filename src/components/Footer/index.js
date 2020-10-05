import React from 'react';


function Footer() {


    return (
        <footer className="footer">
            <div>
                <p>Check out my links below</p>
            </div>
            <a href="https://github.com/Joey-Ramos" className="footer-image">
                    <img src={require(`../../assets/github/GitHub-Mark-Light-32px.png`)} />
            </a>
            <a href="https://www.linkedin.com/in/joseph-ramos-8630031aa/" className="footer-image">
                    <img src={require(`../../assets/linkedin/LinkedIn-32px.png`)} />
            </a>
        </footer>
    )
}

export default Footer;