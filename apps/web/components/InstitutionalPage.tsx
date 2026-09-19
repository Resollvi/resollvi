type InstitutionalPageProps = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export function InstitutionalPage({ title, updatedAt, children }: InstitutionalPageProps) {
  return (
    <div className="container" style={{ paddingTop: 32, paddingBottom: 48, maxWidth: 640 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px" }}>{title}</h1>
      <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "0 0 24px" }}>
        Última atualização: {updatedAt}
      </p>
      <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}
