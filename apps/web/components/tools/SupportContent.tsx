import type { ReactNode } from "react";

// Blocos de texto usados na seção de apoio das páginas de ferramenta.
// Mantêm o mesmo espaçamento e visual em todas as ferramentas.

export function SupportH3({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 15,
        fontWeight: 600,
        color: "var(--text-primary, inherit)",
        margin: "24px 0 8px",
      }}
    >
      {children}
    </h3>
  );
}

export function SupportP({ children }: { children: ReactNode }) {
  return <p style={{ margin: "0 0 12px" }}>{children}</p>;
}

export function SupportList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 12px", paddingLeft: 20 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SupportTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div style={{ overflowX: "auto", margin: "0 0 12px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        {caption && <caption style={{ display: "none" }}>{caption}</caption>}
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            {headers.map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "8px 8px 8px 0", fontWeight: 600 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "6px 8px 6px 0" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
