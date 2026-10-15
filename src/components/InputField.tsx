import type { ComponentProps } from "react";

// Figma "InputField": 한 줄 입력 박스
// state=default(빈 칸) · focus(입력 중, 파란 테두리) · active(값 있음)는 브라우저가 알아서 바꾼다
export default function InputField({ className = "", ...props }: ComponentProps<"input">) {
  return (
    <input
      className={`w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-input-lg text-text-primary placeholder:text-text-disabled focus:border-action-primary focus:outline-none ${className}`}
      {...props}
    />
  );
}
