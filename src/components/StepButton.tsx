import type { ComponentProps, ReactNode } from "react";

// Figma "StepButton": Stepper의 −/+ 버튼. state=disabled는 disabled 속성으로
// 아이콘만 있는 버튼이라 aria-label(화면 읽기용 이름)을 꼭 넣는다
type StepButtonProps = ComponentProps<"button"> & {
  icon: ReactNode;
  "aria-label": string;
};

export default function StepButton({ icon, type = "button", className = "", ...props }: StepButtonProps) {
  return (
    <button
      type={type}
      className={`flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default text-text-primary disabled:cursor-not-allowed disabled:text-text-disabled focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-accent ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
