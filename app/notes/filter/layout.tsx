export default function NotesFilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section style={{ display: "flex" }}>
      <aside>{sidebar}</aside>
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}
