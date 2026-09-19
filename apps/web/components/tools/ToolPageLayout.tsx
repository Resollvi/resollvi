import Link from "next/link";

type Breadcrumb = {
  label: string;
  href: string;
};

type RelatedTool = {
  href: string;
  title: string;
};

type ToolPageLayoutProps = {
  breadcrumbs: Breadcrumb[];
  title: string;
  description: string;
  children: React.ReactNode;
  supportTitle: string;
  supportContent: React.ReactNode;
  relatedTools: RelatedTool[];
};

export function ToolPageLayout({
  breadcrumbs,
  title,
  description,
  children,
  supportTitle,
  supportContent,
  relatedTools,
}: ToolPageLayoutProps) {
  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      <nav aria-label="breadcrumb" style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
        <Link href="/">início</Link>
        {breadcrumbs.map((crumb) => (
          <span key={crumb.href}>
            {" / "}
            <Link href={crumb.href}>{crumb.label}</Link>
          </span>
        ))}
      </nav>

      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: 24,
          marginBottom: 24,
        }}
      >
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{title}</h1>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: "0 0 20px" }}>
          {description}
        </p>
        {children}
      </div>

      <div
        style={{
          minHeight: 100,
          border: "1px dashed var(--border)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          color: "var(--text-muted)",
          marginBottom: 32,
        }}
      >
        espaço reservado para anúncio
      </div>

      <section style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>{supportTitle}</h2>
        <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {supportContent}
        </div>

        {relatedTools.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>
              Ferramentas relacionadas
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  style={{ fontSize: 13, color: "var(--brand)" }}
                >
                  {tool.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
