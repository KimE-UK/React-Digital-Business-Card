import React from "react"
import emailIcon from "../Images/Mail.png"

function Details() {
    return (
        <div className="Details--ctn">
            <h1>Kim Edwards</h1>
            <h2>UX/UI Developer</h2>
            <h4><a href="https://www.behance.net/kimedwards14c4" target="_blank ">kimedwards.portfolio</a></h4>
            <button className="Details--email--button" type="button" 
            onclick='mailto:kimedwards74@googlemail.com'>
                <img src={emailIcon} alt="Email Icon"/>Email
                </button>
        </div>

    )
}

export default Details