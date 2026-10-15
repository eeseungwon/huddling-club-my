import { useId, type ComponentProps } from "react";
import InputField from "@/components/InputField";
import Label from "@/components/Label";

// Figma "Input": 라벨 + 한 줄 입력 박스 + 안내 문구(helper) 묶음
type InputProps = ComponentProps<"input"> & {
  label: string;
  helper?: string;
  showHelper?: boolean;
};

export default function Input({ label, helper = "", showHelper = false, required = true, id, ...props }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = `${inputId}-helper`;
  return (
    <div className="flex w-full flex-col items-start gap-inline-compact">
      <Label htmlFor={inputId} label={label} required={required} />
      <InputField
        id={inputId}
        required={required}
        aria-describedby={showHelper ? helperId : undefined}
        {...props}
      />
      {showHelper && (
        <p id={helperId} className="text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
