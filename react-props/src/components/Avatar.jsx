import React from "react";
import Card from "./Card"
function Avatar(props){
   return <img className="circle-img"
          src={props.imgURL}
          alt="avatar_img"
          />
}

export default Avatar;