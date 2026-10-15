import type { ComponentProps } from "react";

// Figma "icon/plus": 선 색은 글자색(currentColor)을 따른다
export default function IconPlus({ className = "", ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      className={`size-24 shrink-0 ${className}`}
      {...props}
    >
      <path d="M12 20V12M12 12V4M12 12H20M12 12H4" />
    </svg>
  );
}
