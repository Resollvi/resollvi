import Link from "next/link";

type ToolCardProps = {
  href: string;
  icon: string;
  title: string;
  description: string;
};

export function ToolCard({ href, icon, title, description }: ToolCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "16px 20px",
        transition: "border-color 0.15s ease",
      }}
    >
      <span aria-hidden style={{ fontSize: 20, color: "var(--brand)" }}>
        {icon}
      </span>
      <span>
        <span style={{ display: "block", fontWeight: 600, fontSize: 15 }}>
          {title}
        </span>
        <span style={{ display: "block", fontSize: 13, color: "var(--text-secondary)" }}>
          {description}
        </span>
      </span>
    </Link>
  );
}
