import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleNote(e) {
    const { value, name } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.handleAdd(note);
          setNote({ title: "", content: "" });
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNote}
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
