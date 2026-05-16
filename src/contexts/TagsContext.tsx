import { createContext, useEffect, useState } from "react";

import { getTags } from "../services/api";

type TagsContextType = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
};

const TagsContext = createContext<TagsContextType | null>(null);

type TagsProviderType = {
  children: React.ReactNode;
};

function TagsProvider({ children }: TagsProviderType) {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    const fetchTagsData = async () => {
      try {
        const data = await getTags();
        setTags((prev) => [...prev, ...data]);
      } catch (error) {
        if (error instanceof Error) console.error(error.message);
      }
    };

    fetchTagsData();
  }, []);

  return (
    <TagsContext.Provider
      value={{ tags, setTags, selectedTag, setSelectedTag }}
    >
      {children}
    </TagsContext.Provider>
  );
}

export { TagsContext, TagsProvider };
