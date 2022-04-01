import React from 'react';
import App from "./components/App";
import "./css/main.css";
// import $ from "jquery";
import ReactDOMClient from 'react-dom/client';

// const emailAddress = $("#email-input input");
// const notifyBtn = $("#email-input button");

// function CheckEmail() {
//   const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   if (emailRegex.test(emailAddress.val())) {
//     alert("hello");
//   }
// }

// notifyBtn.on("click", CheckEmail);

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />);
