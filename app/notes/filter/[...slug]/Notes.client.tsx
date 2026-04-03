"use client";

import NotesList from "@/components/NoteList/NoteList";
import type { Note } from "@/types/note";

export default function NotesClient({ notes }: { notes: Note[] }) {
  return <NotesList notes={notes} />;
}
