export default function Layout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      {sidebar}

      <div style={{ flex: 1, position: "relative" }}>
        {children}
        {modal}
      </div>
    </div>
  );
}
