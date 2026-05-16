import { useNotes } from "../hooks/useNotes";
import { useTheme } from "../hooks/useTheme";

import type { Note } from "../models/Note";

import { deleteNote } from "../services/api";

import "./note-actions-container.css";

type NoteActionsContainerType = {
  note: Note;
};

function NoteActionsContainer({ note }: NoteActionsContainerType) {
  const {
    notes,
    archivedNotes,
    setNotes,
    setIsSelected,
    setArchivedNotes,
    noteTypes,
  } = useNotes();

  const { theme, themeColorsSwitcher } = useTheme();

  const archiveNote = () => {
    const noteFound = notes.find((n: Note) => n.id === note.id);
    if (!noteFound) return;
    noteFound.isArchived = true;
    setNotes(notes.filter((n: Note) => n.id !== note.id));
    setArchivedNotes((prev) => [...prev, noteFound]);
  };

  return (
    <section className="border-l">
      <article className="flex flex-col gap-5 p-5">
        {!note.isArchived && (
          <div
            className="flex cursor-pointer gap-2 rounded-sm border p-2"
            onClick={archiveNote}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke={themeColorsSwitcher[theme]}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
              />
              <path
                stroke={themeColorsSwitcher[theme]}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
              />
            </svg>
            <h2>Archive Note</h2>
          </div>
        )}
        <div
          className="flex cursor-pointer gap-2 rounded-sm border p-2"
          onClick={() => {
            deleteNote(note.id!)
              .then(() => {
                if (noteTypes === "All") {
                  setNotes(notes.filter((n: Note) => n.id !== note.id));
                } else {
                  setArchivedNotes(
                    archivedNotes.filter((n: Note) => n.id !== note.id),
                  );
                }
                setIsSelected(null);
              })
              .catch((err) => {
                if (err instanceof Error) console.error(err.message);
              });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              stroke={themeColorsSwitcher[theme]}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
            />
          </svg>
          <h2>Delete Note</h2>
        </div>
      </article>
    </section>
  );
}

export default NoteActionsContainer;
