import React from "react";
import logo from "../images/logo.svg";
import illustration from "../images/illustration-dashboard.png";
import $ from "jquery";

const emailAddress = $("#email-input input");
const error = $("#email-input p");

function CheckEmail() {
    const emailRegex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRegex.test(emailAddress.val()) === false) {
        error.addClass("error");
        console.log(emailAddress);
        emailAddress.addClass("error");
    }
    else {
        error.removeClass("error");
        emailAddress.removeClass("error");
    }
}

function Main() {
    return (
        <main>
            <div id="heading">
                <div className="container">
                    <img src={logo} alt="logo"/>
                    <h1>We are launching <span>soon!</span></h1>
                    <p>Subscribe and get notified</p>
                </div>
            </div>
            <div id="email-input">
                <div className="container">
                    <input placeholder="Your email address..." />
                    <p>Please provide a valid email address</p>
                    <button type="button" onClick={CheckEmail} aria-label="Notify Me">Notify me</button>
                </div>
            </div>
            <div className="illustration">
                <div className="container">
                    <img className="container" src={illustration} alt="illustration" />
                </div>
            </div>
        </main>
    );
}

export default Main;