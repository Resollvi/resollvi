import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 64,
        padding: "32px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontSize: 13,
          color: "var(--text-muted)",
        }}
      >
        <span>© {new Date().getFullYear()} Resollvi</span>
        <div style={{ display: "flex", gap: 16 }}>
          <Link href="/sobre">Sobre</Link>
          <Link href="/privacidade">Política de privacidade</Link>
          <Link href="/termos">Termos de uso</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
