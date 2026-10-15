import { useId, type ComponentProps } from "react";
import Label from "@/components/Label";
import Radio from "@/components/Radio";

// Figma "RadioOption": 라디오 + 라벨 한 줄. 라벨 글자를 눌러도 선택된다
type RadioOptionProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  required?: boolean;
};

export default function RadioOption({ label, required = false, id, ...props }: RadioOptionProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className="flex items-center">
      <Radio id={inputId} {...props} />
      <Label htmlFor={inputId} label={label} required={required} className="cursor-pointer" />
    </div>
  );
}
