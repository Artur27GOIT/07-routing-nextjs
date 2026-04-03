import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug?.[0];

  const queryParams =
    slug === "all" ? undefined : { tag: slug, page: 1, perPage: 12 };

  const response = await fetchNotes(queryParams);

  return <NotesClient notes={response.notes} />;
}
