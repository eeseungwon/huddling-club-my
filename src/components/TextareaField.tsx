import type { ComponentProps } from "react";

// Figma "TextareaField": 여러 줄 입력 박스
// state=default · focus(파란 테두리) · active(값 있음)는 브라우저가 알아서 바꾼다
export default function TextareaField({ className = "", ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`block h-45 w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-input-lg text-text-primary placeholder:text-text-disabled focus:border-action-primary focus:outline-none ${className}`}
      {...props}
    />
  );
}
