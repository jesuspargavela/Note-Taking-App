import "./create-note.css";

type CreateNoteType = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  children: React.ReactNode;
};

function CreateNote({ children, dialogRef }: CreateNoteType) {
  return (
    <dialog
      ref={dialogRef}
      className="absolute top-[15%] left-[37%] w-[30%] rounded-md border p-4"
      closedby="any"
    >
      {children}
    </dialog>
  );
}

export default CreateNote;
