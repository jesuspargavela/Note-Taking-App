import { useNotes } from "./hooks/useNotes";
import { useTheme } from "./hooks/useTheme";

import Header from "./components/Header";
import Aside from "./components/Aside";
import NoteListContainer from "./components/NoteListContainer";
import NoteContainer from "./components/NoteContainer";
import NoteActionsContainer from "./components/NoteActionsContainer";

import "./App.css";

function App() {
  const { isSelected } = useNotes();
  const { theme } = useTheme();

  return (
    <div className={`${theme === "black" ? " bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <Aside />
      {isSelected ? (
        <main className="absolute top-16 left-65 grid w-317 grid-cols-[1fr_3fr_1fr]">
          <NoteListContainer />
          <NoteContainer note={isSelected} />
          <NoteActionsContainer note={isSelected} />
        </main>
      ) : (
        <main className="absolute top-16 left-65 grid h-full w-317 grid-cols-[1fr_11fr]">
          <NoteListContainer />
          <article className="flex h-full items-center justify-center">
            <h1 className="p-4 text-3xl">
              Please, click on a note to display information
            </h1>
          </article>
        </main>
      )}
    </div>
  );
}

export default App;
