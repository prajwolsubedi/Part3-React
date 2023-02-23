import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes] = useState([]);
  function addNotes(note){
    setNotes((prevNotes) => [...prevNotes,note]);
  }

  function deleteNotes(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((item,index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
      {notes.map((item,index) => {
        return <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNotes} /> ;
      })}
      <Footer />
    </div>
  );
}

export default App;
