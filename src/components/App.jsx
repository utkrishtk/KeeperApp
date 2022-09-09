import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function updateNoteArray(note) {
    setNoteArray((prevNoteArray) => {
      return [...prevNoteArray, note];
    });
  }
  function deleteNote(id) {
    setNoteArray((prevNoteArray) => prevNoteArray.filter((_, i) => i !== id));
  }
  return (
    <>
      <Header />
      <CreateArea handleAdd={updateNoteArray} />
      {noteArray.map((note, i) => (
        <Note
          key={i}
          title={note.title}
          content={note.content}
          id={i}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
