import React from 'react';


function Contact() {


    return (
        <section>
            <h1>Contact me</h1>
            <form className="contact-form">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" rows="5" />
                </div>
            </form>
        </section>
    )
}

export default Contact;