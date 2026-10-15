import type { ComponentProps } from "react";

// Figma "Button" (node 2168:1089): size=sm/md/lg, state=default/hover/disabled
// hover는 마우스를 올렸을 때(hover:), disabled는 disabled 속성으로 표현한다.
type ButtonProps = ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg";
};

// 모든 크기에 공통으로 쓰는 모양
const base =
  "inline-flex items-center justify-center whitespace-nowrap px-control-y rounded-control text-text-inverse " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-accent " +
  "disabled:bg-border-subtle disabled:cursor-not-allowed";

// 크기별 모양 (Figma 값 그대로)
const sizes = {
  // sm은 높이 28px로 작아서, 눈에 안 보이는 터치 영역을 위아래로 8px씩 넓혀 44px로 만든다
  sm:
    "relative gap-control-compact py-inline-sm text-label-md bg-action-primary enabled:hover:bg-action-hover-overlay " +
    "after:absolute after:inset-x-0 after:-inset-y-8",
  // md 기본 배경은 Figma대로 회색(text-secondary). hover 때 그 위에 파란 반투명 막을 겹친다
  md:
    "h-48 gap-inline-compact py-control-x text-label-md bg-text-secondary " +
    "enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay",
  lg: "h-52 gap-control-compact py-inline-sm text-label-lg bg-action-primary enabled:hover:bg-action-hover-overlay",
};

export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
