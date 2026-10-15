import type { ComponentProps } from "react";

// Figma "icon/minus": 선 색은 글자색(currentColor)을 따른다
export default function IconMinus({ className = "", ...props }: ComponentProps<"svg">) {
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
      <path d="M20 12H4" />
    </svg>
  );
}
