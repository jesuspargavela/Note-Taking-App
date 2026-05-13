import { useState } from "react";

import { useNotes } from "../hooks/useNotes";
import { useTheme } from "../hooks/useTheme";

import "./search-bar.css";

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const { notes, archivedNotes, setSearchedBySearchBarNotes, setNoteTypes } =
    useNotes();
  const { theme } = useTheme();

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    if (!query) return;

    setSearchedBySearchBarNotes([]);

    const mergedNotes = [...new Set([...notes, ...archivedNotes])];

    for (const note of mergedNotes) {
      if (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
      ) {
        setSearchedBySearchBarNotes((prev) => [...new Set([...prev, note])]);
      }
    }

    for (const note of mergedNotes) {
      note.tags.forEach((t: string) => {
        if (t.toLowerCase() === query.toLowerCase()) {
          setSearchedBySearchBarNotes((prev) => [...new Set([...prev, note])]);
        }
      });
    }

    setNoteTypes("SearchBar");
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit}>
        <span className="absolute top-6 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill={theme === "light" ? "black" : "white"}
              fill-rule="evenodd"
              d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
              clip-rule="evenodd"
            />
            <path
              fill={theme === "light" ? "black" : "white"}
              fill-rule="evenodd"
              d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <input
          className={`w-74 rounded-sm border ${theme === "light" ? "border-black" : "border-white"} pt-1 pb-1 pl-8 placeholder:text-gray-700`}
          type="search"
          name="query"
          id="query"
          placeholder="Search by title, content, or tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
