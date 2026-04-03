import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview";

export default function Page({ params }: { params: { id: string } }) {
  return <NotePreview id={params.id} />;
}
