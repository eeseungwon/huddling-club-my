import type { ReactNode } from "react";
import IconNone from "@/components/IconNone";

// Figma "NavBar": 화면 상단 바. 가운데 제목, 양옆 left/right 아이콘 자리(없으면 빈 칸)
type NavBarProps = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
};

export default function NavBar({ title, left, right }: NavBarProps) {
  return (
    <header className="flex h-65 w-full items-center gap-section p-page-horizontal">
      {left ?? <IconNone />}
      <h1 className="min-w-1 flex-1 text-center text-heading-md tracking-minus-1 text-text-primary">{title}</h1>
      {right ?? <IconNone />}
    </header>
  );
}
