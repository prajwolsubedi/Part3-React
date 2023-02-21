import React,{useState} from "react";

function InputArea(props) {
    const [inputText,setInputText] = useState("");
    function handleChange(event){
        const {value} = event.target;
        setInputText(value);
    }


  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={(event) => {
        props.onAdd(inputText);
        setInputText("");
      }}>
        <span>Add</span>
      </button>
    </div>
  ); 
}

export default InputArea;
