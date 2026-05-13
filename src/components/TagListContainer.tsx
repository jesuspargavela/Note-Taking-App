import TagList from "./TagList";

import "./tag-list-container.css";

function TagListContainer() {
  return (
    <div className="h-142 p-5">
      <h3 className="pb-2 text-gray-600">Tags</h3>
      <TagList />
    </div>
  );
}

export default TagListContainer;
