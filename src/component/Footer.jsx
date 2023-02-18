import React from "react";

let date = new Date();
let currentDate = date.getFullYear();
function Footer(){
    return (
        <footer>
        <p> &copy; {currentDate} </p>
        </footer>
    )
}

export default Footer;