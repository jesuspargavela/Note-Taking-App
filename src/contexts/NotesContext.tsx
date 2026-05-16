import { createContext, useEffect, useState } from "react";

import { getNotes } from "../services/api";

import type { Note } from "../models/Note";

type NotesContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  archivedNotes: Note[];
  setArchivedNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  searchedByTagNotes: Note[];
  setSearchedByTagNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  searchedBySearchBarNotes: Note[];
  setSearchedBySearchBarNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  isSelected: Note | null;
  setIsSelected: React.Dispatch<React.SetStateAction<Note | null>>;
  noteTypes: string;
  setNoteTypes: React.Dispatch<React.SetStateAction<string>>;
};

const NotesContext = createContext<NotesContextType | null>(null);

type NotesProviderType = {
  children: React.ReactNode;
};

function NotesProvider({ children }: NotesProviderType) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [archivedNotes, setArchivedNotes] = useState<Note[]>([]);
  const [searchedByTagNotes, setSearchedByTagNotes] = useState<Note[]>([]);
  const [searchedBySearchBarNotes, setSearchedBySearchBarNotes] = useState<
    Note[]
  >([]);
  const [isSelected, setIsSelected] = useState<Note | null>(null);
  const [noteTypes, setNoteTypes] = useState<string>("All");

  useEffect(() => {
    const fetchNotesData = async () => {
      try {
        const data = await getNotes();
        setNotes(data);
        setArchivedNotes(data.filter((n: Note) => n.isArchived));
      } catch (error) {
        if (error instanceof Error) console.error(error.message);
      }
    };

    fetchNotesData();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        isSelected,
        setIsSelected,
        archivedNotes,
        setArchivedNotes,
        searchedByTagNotes,
        setSearchedByTagNotes,
        searchedBySearchBarNotes,
        setSearchedBySearchBarNotes,
        noteTypes,
        setNoteTypes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
