import type { ComponentProps } from "react";

// Figma "Radio": state=default · selected(checked) · disabled
// 진짜 <input type="radio">를 투명하게 48px로 깔아 터치 영역을 넓히고, 그 위에 동그라미 모양을 그린다
type RadioProps = Omit<ComponentProps<"input">, "type">;

export default function Radio({ className = "", ...props }: RadioProps) {
  return (
    <span className={`relative flex size-48 shrink-0 items-center justify-center ${className}`}>
      <input
        type="radio"
        className="peer absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed"
        {...props}
      />
      {/* 바깥 원: 기본 회색 → 선택 파랑 → 비활성 연회색 */}
      <span
        aria-hidden="true"
        className="pointer-events-none size-20 rounded-pill bg-text-tertiary peer-checked:bg-action-primary peer-disabled:bg-text-disabled peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-accent"
      />
      {/* 안쪽 흰 점: 기본 16px → 선택되면 8px */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute size-16 rounded-pill bg-surface-default peer-checked:size-8"
      />
    </span>
  );
}
