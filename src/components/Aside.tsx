import NotesLogo from "./NotesLogo";
import NotesSelectionContainer from "./NotesSelectionContainer";
import TagListContainer from "./TagListContainer";

import "./aside.css";

function Aside() {
  return (
      <aside className="h-screen w-65 border-r">
        <div className="flex h-16 items-center justify-start p-2">
          <NotesLogo />
        </div>
        <NotesSelectionContainer />
        <TagListContainer />
      </aside>
  );
}

export default Aside;
