import React from 'react';

import './Contact.css';

const Contact = () => {

    return (<section id="contact">
        <h2>Contact Us</h2>
        <form method="">
            
            <ul>
                <li><input type="text" placeholder="Name" /></li>
                <li><input type="email" placeholder="Email Address" /></li>
                <li><input type="text" placeholder="Subject" /></li>
                <li><textarea placeholder="Messagge"></textarea></li>
                <li> <button type="submit" class="send-btn" disabled="true">Send</button></li>
            </ul>

        </form>

    </section>)

}

export default Contact;