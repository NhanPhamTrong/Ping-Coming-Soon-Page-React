import React from "react";

function ClickFacebook(e) {
    e.preventDefault();
    window.location.href = "#";
}

function ClickTwitter(e) {
    e.preventDefault();
    window.location.href = "#";
}

function ClickInstagram(e) {
    e.preventDefault();
    window.location.href = "#";
}

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="social-media">
                    <button type="button" onClick={ClickFacebook} aria-label="Facebook"><i className="fa-brands fa-facebook-square"></i></button>
                    <button type="button" onClick={ClickTwitter} aria-label="Twitter"><i className="fa-brands fa-twitter"></i></button>
                    <button type="button" onClick={ClickInstagram} aria-label="Instagram"><i className="fa-brands fa-instagram"></i></button>
                </div>
                <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
                <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://www.frontendmentor.io/profile/NhanPhamTrong">Your Name Here</a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;