import type { Note } from "../models/Note";

import { formatDate } from "../util/formatDate";

import "./note-entity.css";

type NoteEntityType = {
  note: Note;
  isSelected: Note | null;
  setIsSelected: React.Dispatch<React.SetStateAction<Note | null>>;
};

function NoteEntity({ note, isSelected, setIsSelected }: NoteEntityType) {
  return (
    <li
      key={note.id}
      className={`cursor-pointer ${isSelected?.id === note.id ? "border-none" : "border-b"}`}
      onClick={() => setIsSelected({ ...note })}
    >
      <div
        className={`flex flex-col gap-2 p-2 hover:rounded-md hover:bg-gray-500/50 ${isSelected?.id === note.id ? "rounded-md bg-gray-500/50" : ""}`}
      >
        <h3>{note.title}</h3>
        <div className="flex gap-2">
          {note.tags.map((tag: string, idx: number) => (
            <span key={idx} className="rounded-md bg-gray-500/50 p-1">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500">{formatDate(note.lastEdited)}</p>
      </div>
    </li>
  );
}

export default NoteEntity;
