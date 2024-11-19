import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './General.css';
import './Contact.css';


export const Contact = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendMessage = (event) => {
        event.persist();
        event.preventDefault();
        setIsSubmitted(true);
        
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            event.target,
            process.env.REACT_APP_EMAIL_PUBLIC
        ).then((result) => {
            setStateMessage('Message Sent!');
            setIsSubmitted(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000)
            }
        ).catch((err) => {
            console.log(err);
            setStateMessage('Something went wrong please try again later');
            setIsSubmitted(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000)
        })
    }

    return(
        <div className="mainContainer">
            <div className="title content">
                <h1 className="title-name">Message me!</h1>
                <form onSubmit={sendMessage}>
                    <label className="name label">Name</label>
                    <input className="name-input" type="text" name="username"></input>
                    <label className="email label">Email</label>
                    <input className="email-input" type="email" name="useremail"/>
                    <label className="message label">Message</label>
                    <textarea className="test-area label" name="message" />
                    <input type="submit" value="Send" disabled={isSubmitted}/>
                    {stateMessage && <p>{stateMessage}</p>}
                </form>
            </div>
        </div>
    );
};