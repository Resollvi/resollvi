type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputMode?: "numeric" | "decimal" | "text";
};

export function Field({ label, id, value, onChange, placeholder, inputMode = "decimal" }: FieldProps) {
  return (
    <div style={{ flex: 1 }}>
      <label
        htmlFor={id}
        style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          height: 40,
          padding: "0 12px",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          fontSize: 15,
          background: "var(--surface)",
          color: "var(--text-primary)",
        }}
      />
    </div>
  );
}

export function CalculateButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      style={{
        width: "100%",
        height: 44,
        marginTop: 16,
        border: "none",
        borderRadius: "var(--radius-sm)",
        background: "var(--brand)",
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export function ResultCard({ label, value, helper }: ResultCardProps) {
  return (
    <div
      style={{
        marginTop: 20,
        background: "var(--result-bg)",
        borderRadius: "var(--radius-md)",
        padding: "16px 20px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "0 0 4px" }}>{label}</p>
      <p style={{ fontSize: 28, fontWeight: 700, color: "var(--result)", margin: 0 }}>{value}</p>
      {helper && (
        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "4px 0 0" }}>{helper}</p>
      )}
    </div>
  );
}
