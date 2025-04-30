import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './General.css';
import './Contact.css';


export const Contact = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState("");
    const [error, setError] = useState("");

    const nameRef = useRef();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // const handleEmailEntered = (e) => {

    //     const value = e.target.value;
    //     setValidEmail(value);
    //     if(validateEmail(validEmail)){
    //         setError("");
    //     }else{
    //         setError("Please enter a valid email");
    //     }
    // }

    const handleNameChange = (name) => {
        setName(name);
    }

    const sendMessage = (event) => {
        event.persist();
        event.preventDefault();

        // if()
        if(name.trim() === "" || stateMessage === null || setStateMessage === ""){
            setError("Please Enter all Fields above");
            return;
        }

        setIsSubmitted(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            event.target,
            process.env.REACT_APP_EMAIL_PUBLIC
        ).then((result) => {
            const value = event.target.value;
        setValidEmail(value);
        if(validateEmail(validEmail)){
            setError("");
        }else{
            setError("Please enter a valid email");
        }
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
                    <input className="name-input" placeholder="Enter Name..." 
                        onChange= {handleNameChange} ref={nameRef} value="name" type="text" name="username"></input>
                    <label className="email label">Email</label>
                    <input className="email-input" 
                        placeholder="Enter Email" type="email" name="useremail"/>
                    <label className="message label">Message</label>
                    <textarea className="test-area label" name="message" />
                    <input type="submit" value="Send" disabled={isSubmitted}/>
                    {error && <p style={{color: "red", marfginTop:"5px"}}>{error}</p>}
                    {stateMessage && <p>{stateMessage}</p>}
                </form>
            </div>
        </div>
    );
};