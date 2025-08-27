import React from 'react'

type CircleCheckboxProps = {
  checked: boolean;
  onChange: (v: boolean) => void;
  variant?: "check" | "dot";
  disabled?: boolean;
};

export default function CircleCheckbox({
  checked,
  onChange,
  disabled = false,
}: CircleCheckboxProps) {
  return (
    <label
      className="inline-flex select-none cursor-pointer group"
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="w-6 h-6 relative">
        <span className="absolute top-[3.27px] left-[3.27px] w-[17.45px] h-[17.45px] rounded-full border-[1.5px] border-[#4EA8DE] flex items-center justify-center group-has-[:checked]:border-[#5E60CE] group-has-[:checked]:bg-[#5E60CE] transition-colors duration-200">
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </span>
      </span>
    </label>
  );
}
