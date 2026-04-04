import type { ReactNode } from "react";

export default function FilterLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <section style={{ display: "flex", gap: "20px" }}>
      <aside>{sidebar}</aside>
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}
