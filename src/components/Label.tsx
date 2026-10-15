import type { ComponentProps } from "react";

// Figma "Label": 입력창 위 이름표. required가 켜지면 빨간 "필수"가 붙는다
type LabelProps = ComponentProps<"label"> & {
  label: string;
  required?: boolean;
};

export default function Label({ label, required = true, className = "", ...props }: LabelProps) {
  return (
    <label
      className={`flex items-center gap-inline-sm whitespace-nowrap ${className}`}
      {...props}
    >
      <span className="text-input-lg font-semibold text-text-strong">{label}</span>
      {required && (
        <span className="text-caption-md tracking-minus-0-16 text-feedback-error">필수</span>
      )}
    </label>
  );
}
