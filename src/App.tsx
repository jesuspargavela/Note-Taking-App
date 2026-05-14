import { useRef, useState } from "react";

import { useNotes } from "./hooks/useNotes";
import { useTheme } from "./hooks/useTheme";

import Header from "./components/Header";
import Aside from "./components/Aside";
import NoteListContainer from "./components/NoteListContainer";
import NoteContainer from "./components/NoteContainer";
import NoteActionsContainer from "./components/NoteActionsContainer";
import CreateNote from "./components/CreateNote";

import { TAGS } from "./services/api";

import type { Note } from "./models/Note";

import "./App.css";

function App() {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");

  const { notes, setNotes, isSelected } = useNotes();
  const { theme } = useTheme();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      tags,
      content,
      lastEdited: new Date().toISOString(),
      isArchived: false,
    };

    console.log(newNote.lastEdited);

    const addedNewNoteArray = [...notes, newNote];

    setNotes(addedNewNoteArray);

    formRef.current?.reset();

    dialogRef.current?.close();
  };

  return (
    <div
      className={`${theme === "black" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Header />
      <Aside />
      {isSelected ? (
        <main className="absolute top-16 left-65 grid w-317 grid-cols-[1fr_3fr_1fr]">
          <NoteListContainer dialogRef={dialogRef} />
          <NoteContainer note={isSelected} />
          <NoteActionsContainer note={isSelected} />
        </main>
      ) : (
        <main className="absolute top-16 left-65 grid h-full w-317 grid-cols-[1fr_11fr]">
          <NoteListContainer dialogRef={dialogRef} />
          <article className="flex h-full items-center justify-center">
            <h1 className="p-4 text-3xl">
              Please, click on a note to display information
            </h1>
          </article>
        </main>
      )}
      <CreateNote dialogRef={dialogRef}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Create Note</h1>
            <div className="flex gap-2">
              <label htmlFor="title">Title</label>
              <input
                className="w-full rounded-sm border"
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="tags">Tags</label>
              <select
                className="rounded-sm border"
                name="tags"
                id="tags"
                onChange={(e) =>
                  setTags((prev) => [...new Set([...prev, e.target.value])])
                }
                multiple
                required
              >
                {TAGS.map((t: string) => (
                  <option value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="content">Content</label>
              <textarea
                className="dialog-content rounded-sm border"
                name="content"
                id="content"
                cols={30}
                rows={10}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="rounded-sm border bg-green-400" type="submit">
              Create Note
            </button>
          </div>
        </form>
      </CreateNote>
    </div>
  );
}

export default App;
