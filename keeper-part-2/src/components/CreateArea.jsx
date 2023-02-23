import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [isExpanded,setExpanded] = useState(false);
  const [note,setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event){
    const {name,value} = event.target;
    setNote((prevValue) => {
      return{...prevValue,[name]:value}
    })
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleChange} value={note.content} onClick={expand}/>
        <Zoom in={isExpanded}>
        <Fab color="primary" onClick={(event) => {
          event.preventDefault();
          props.onAdd(note);
          setNote({title:"", content:""});
        }}><AddIcon />
        </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
