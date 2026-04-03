"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

export default function NotePreviewClient({ id }: { id: string }) {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return null;
  if (error || !data) return null;

  return (
    <Modal onClose={() => router.back()}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>
        <strong>Tag:</strong> {data.tag}
      </p>

      <button onClick={() => router.back()}>Close</button>
    </Modal>
  );
}
