import React from "react"
import AvatarIcon from"../Images/Avatar.png"

function Avatar() {
    return(
        <div className="Avatar--ctn">
            <div className="Avatar--img-ctn">
            <img src={AvatarIcon} alt="Avatar Image" className="AvatarIcon"></img>
            </div>
            <div className="Avatar-ColorOne"></div>
        </div>
    )
}

export default Avatar