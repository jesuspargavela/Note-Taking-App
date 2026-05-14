import type { Theme } from "../contexts/ThemeContext";

import "./create-note.css";

type CreateNoteType = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  children: React.ReactNode;
  theme: Theme
};

function CreateNote({ children, dialogRef, theme }: CreateNoteType) {
  return (
    <dialog
      ref={dialogRef}
      className={`absolute top-[15%] left-[37%] w-[30%] rounded-md border p-4 ${theme === "black" ? "bg-black text-white" : "bg-white text-black"}`}
      closedby="any"
    >
      {children}
    </dialog>
  );
}

export default CreateNote;
