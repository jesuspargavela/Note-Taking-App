import { useNotes } from "../hooks/useNotes";

import type { Note } from "../models/Note";

import { updateNote } from "../services/api";

import "./note-footer.css";

type NoteFooterType = {
  note: Note;
  content: string;
};

function NoteFooter({ note, content }: NoteFooterType) {
  const { notes, setIsSelected } = useNotes();

  const saveNote = () => {
    const noteFound = notes.find((n: Note) => n.id === note.id);
    if (!noteFound) return;

    const oldContent = noteFound.content;
    const oldLastEdited = noteFound.lastEdited;

    noteFound.content = content;
    noteFound.lastEdited = new Date().toISOString();

    updateNote(note.id!, noteFound)
      .then(() => {
        setIsSelected(null);
      })
      .catch((err) => {
        noteFound.content = oldContent;
        noteFound.lastEdited = oldLastEdited;
        if (err instanceof Error) console.error(err.message);
      });
  };

  return (
    <article className="ml-2 flex justify-start gap-2 p-2">
      <button
        type="button"
        className="cursor-pointer rounded-md bg-blue-500 p-2"
        onClick={saveNote}
      >
        Save Note
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-md bg-gray-700 p-2 text-gray-400"
        onClick={() => setIsSelected(null)}
      >
        Cancel
      </button>
    </article>
  );
}

export default NoteFooter;
