import { useNotes } from "../hooks/useNotes";

import NoteEntity from "./NoteEntity";

import type { Note } from "../models/Note";

import "./note-list.css";

function NoteList() {
  const {
    notes,
    isSelected,
    setIsSelected,
    noteTypes,
    archivedNotes,
    searchedByTagNotes,
    searchedBySearchBarNotes,
  } = useNotes();

  return (
    <ul className="notes flex h-151 flex-col overflow-y-auto">
      {noteTypes === "All"
        ? notes.map((note: Note) => {
            if (!note.isArchived) {
              return (
                <NoteEntity
                  key={note.id}
                  note={note}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              );
            }
          })
        : noteTypes === "Archived"
          ? archivedNotes.map((note: Note) => (
              <NoteEntity
                key={note.id}
                note={note}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            ))
          : noteTypes === "Tags"
            ? searchedByTagNotes.map((note: Note) => (
                <NoteEntity
                  key={note.id}
                  note={note}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              ))
            : searchedBySearchBarNotes.map((note: Note) => (
                <NoteEntity
                  key={note.id}
                  note={note}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              ))}
    </ul>
  );
}

export default NoteList;
