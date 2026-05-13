import { createContext, useState } from "react";

import { NOTES } from "../services/api";

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
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
};

const NotesContext = createContext<NotesContextType | null>(null);

type NotesProviderType = {
  children: React.ReactNode;
};

function NotesProvider({ children }: NotesProviderType) {
  const [notes, setNotes] = useState<Note[]>(NOTES);
  const [archivedNotes, setArchivedNotes] = useState<Note[]>(
    NOTES.filter((n: Note) => n.isArchived),
  );
  const [searchedByTagNotes, setSearchedByTagNotes] = useState<Note[]>([]);
  const [searchedBySearchBarNotes, setSearchedBySearchBarNotes] = useState<
    Note[]
  >([]);
  const [isSelected, setIsSelected] = useState<Note | null>(null);
  const [noteTypes, setNoteTypes] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("");

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
        selectedTag,
        setSelectedTag,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
