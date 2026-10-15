import { useId, type ComponentProps } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

// Figma "Textarea": 라벨 + 여러 줄 입력 박스 + 안내 문구
// rows=2는 제목처럼 짧은 글(높이 72px), rows=4는 본문(높이 120px)
const heights = { "2": "h-72", "4": "h-120" };

type TextareaProps = Omit<ComponentProps<"textarea">, "rows"> & {
  label: string;
  rows?: "2" | "4";
  helper?: string;
  showHelper?: boolean;
};

export default function Textarea({
  label,
  rows = "4",
  helper = "",
  showHelper = false,
  required = true,
  id,
  ...props
}: TextareaProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = `${inputId}-helper`;
  return (
    <div className="flex w-full flex-col items-start gap-inline-compact">
      <Label htmlFor={inputId} label={label} required={required} />
      <TextareaField
        id={inputId}
        rows={Number(rows)}
        required={required}
        aria-describedby={showHelper ? helperId : undefined}
        className={heights[rows]}
        {...props}
      />
      {showHelper && (
        <p id={helperId} className="whitespace-nowrap text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
