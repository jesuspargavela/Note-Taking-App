import { useState } from "react";

import type { Note } from "../models/Note";

import "./note-content.css";

type NoteContentType = {
  note: Note
  setUpdatedContent: React.Dispatch<React.SetStateAction<string>>;
};

function NoteContent({ note, setUpdatedContent }: NoteContentType) {
  const [content, setContent] = useState<string>(note.content);

  return (
    <article
      className={`content ${!note.isArchived ? "h-116" : "h-130"} overflow-y-auto border-b`}
    >
      <div className="flex flex-col gap-4 p-4 whitespace-pre-line">
        {!note.isArchived ? (
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={30}
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
              setUpdatedContent(e.target.value);
            }}
          ></textarea>
        ) : (
          content
        )}
      </div>
    </article>
  );
}

export default NoteContent;
