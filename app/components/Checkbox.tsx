type CircleCheckboxProps = {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
  variant?: "check" | "dot";
  disabled?: boolean;
};

export default function CircleCheckbox({
  checked,
  onChange,
  label = "Option",
  variant = "check",
  disabled = false,
}: CircleCheckboxProps) {
  return (
    <label className={`inline-flex items-center gap-2 select-none ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span
        className={`h-5 w-5 rounded-full border flex items-center justify-center
                    border-gray-300 transition
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-500
                    ${variant === "check" ? "peer-checked:bg-blue-600 peer-checked:border-blue-600" : "peer-checked:border-blue-600"}`}
        aria-hidden="true"
      >
        {variant === "check" ? (
          <svg className={`h-3.5 w-3.5 transition ${checked ? "opacity-100" : "opacity-0"}`} viewBox="0 0 20 20" fill="none">
            <path d="M5 10.5l3 3 7-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <span className={`rounded-full ${checked ? "opacity-100" : "opacity-0"}`} style={{ width: 10, height: 10, background: "rgb(37 99 235)" }} />
        )}
      </span>
      <span>{label}</span>
    </label>
  );
}
