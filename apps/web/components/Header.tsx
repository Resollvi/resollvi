import Link from "next/link";

export function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "var(--brand)",
            letterSpacing: "-0.01em",
          }}
        >
          Resollvi
        </Link>
        <nav style={{ display: "flex", gap: 20, fontSize: 14, color: "var(--text-secondary)" }}>
          <Link href="/saude/imc">Saúde</Link>
          <Link href="/matematica/porcentagem">Matemática</Link>
          <Link href="/financas/juros-compostos">Finanças</Link>
        </nav>
      </div>
    </header>
  );
}
