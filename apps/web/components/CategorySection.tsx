import { ToolCard } from "./ToolCard";

type Tool = {
  href: string;
  icon: string;
  title: string;
  description: string;
};

type CategorySectionProps = {
  label: string;
  tools: Tool[];
};

export function CategorySection({ label, tools }: CategorySectionProps) {
  return (
    <section style={{ marginBottom: 24 }}>
      <h2
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: 8,
        }}
      >
        {label}
      </h2>
      <div style={{ display: "grid", gap: 12 }}>
        {tools.map((tool) => (
          <ToolCard key={tool.href} {...tool} />
        ))}
      </div>
    </section>
  );
}
