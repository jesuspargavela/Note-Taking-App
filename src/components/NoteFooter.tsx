import { useNotes } from "../hooks/useNotes";

import type { Note } from "../models/Note";

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
    noteFound.content = content;
    noteFound.lastEdited = new Date().toISOString();
    setIsSelected(null);
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
