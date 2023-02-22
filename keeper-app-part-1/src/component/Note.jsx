//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

import React from "react";

function Note(){
    return(
        <div className="note">
            <h1>
                This is the Note Title.
            </h1>
            <p>
                This is the Note content.
            </p>
        </div>
    );
}

export default Note;