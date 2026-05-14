import { useNotes } from "../hooks/useNotes";

import NoteList from "./NoteList";

import "./note-list-container.css";

type NoteListContainerType = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
};

function NoteListContainer({ dialogRef }: NoteListContainerType) {
  const { noteTypes } = useNotes();

  return (
    <section className="border-r pl-5">
      <article className="flex flex-col gap-y-3 p-3">
        {noteTypes === "All" && (
          <button
            type="button"
            className="cursor-pointer rounded-md border bg-blue-600 px-2 py-1"
            onClick={() => {
              if (!dialogRef.current?.open) {
                dialogRef.current?.showModal();
              }
            }}
          >
            + Create New Note
          </button>
        )}
        <NoteList />
      </article>
    </section>
  );
}

export default NoteListContainer;
