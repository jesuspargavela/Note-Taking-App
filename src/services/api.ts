import type { Note } from "../models/Note";

export const getNotes = async (): Promise<Note[]> => {
    try {
        const response = await fetch("http://localhost:3000/notes");

        if (!response.ok) {
            throw new Error("Failed to fetch notes");
        }

        return await response.json() as Note[];
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return []; // fallback
    }
};

export const getNote = async (id: string): Promise<Note | null> => {
    try {
        const response = await fetch(`http://localhost:3000/notes/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch note with id ${id}`);
        }

        return await response.json() as Note;
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return null;
    }
};

export const createNote = async (newNote: Omit<Note, "id">): Promise<void | null> => {
    try {
        const response = await fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newNote),
        });

        if (!response.ok) {
            throw new Error("Failed to create note");
        }

        return;
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return null;
    }
};

export const updateNote = async (id: string, updatedNote: Note): Promise<void | null> => {
    try {
        const response = await fetch(`http://localhost:3000/notes/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedNote),
        });

        if (!response.ok) {
            throw new Error(`Failed to update note with id ${id}`);
        }

        return;
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return null;
    }
};

export const deleteNote = async (id: string): Promise<void | null> => {
    try {
        const response = await fetch(`http://localhost:3000/notes/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Failed to delete note with id ${id}`);
        }

        return;
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return null;
    }
};

export const getTags = async (): Promise<string[]> => {
    try {
        const response = await fetch("http://localhost:3000/tags");

        if (!response.ok) {
            throw new Error("Failed to fetch tags");
        }

        return await response.json() as string[];
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return [];
    }
};
