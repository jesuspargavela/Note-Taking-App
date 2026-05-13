import { useState } from "react";

import NoteHeader from "./NoteHeader";
import NoteContent from "./NoteContent";
import NoteFooter from "./NoteFooter";

import type { Note } from "../models/Note";

import "./note-container.css";

type NoteContainerType = {
  note: Note;
};

function NoteContainer({ note }: NoteContainerType) {
  const [updatedContent, setUpdatedContent] = useState<string>("");

  return (
    <section>
      <NoteHeader note={note} />
      <NoteContent
        key={note.id}
        note={note}
        setUpdatedContent={setUpdatedContent}
      />
      {!note.isArchived && (
        <NoteFooter note={note} content={updatedContent} />
      )}
    </section>
  );
}

export default NoteContainer;
