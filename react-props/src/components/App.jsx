import React from "react";
import Contacts from "../contact"
import Card from "./Card"
import Avatar from "./Avatar";

function creatCard(Contacts){
  return <Card
    key = {Contacts.id}
    id = {Contacts.id}
    name={Contacts.name}
    imgURL={Contacts.imgURL}
    phone={Contacts.phone}
    email={Contacts.email}
  />
}

function App(){
    return(
    <div>
      <div>
        <h1>My Contact</h1>
        <Avatar imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Elon_Musk_Brazil_2022.png/1280px-Elon_Musk_Brazil_2022.png"/>
      </div>
      {Contacts.map(creatCard)}
    </div>
    );
  }


export default App;