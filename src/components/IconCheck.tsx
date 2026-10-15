import type { ComponentProps } from "react";

// Figma "icon/check": 선 색은 글자색(currentColor)을 따른다. 기본 색은 text-tertiary
export default function IconCheck({ className = "", ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`size-24 shrink-0 text-text-tertiary ${className}`}
      {...props}
    >
      <path d="M4.5 12L9.5 16L18.5 7" />
    </svg>
  );
}
