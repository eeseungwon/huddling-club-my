"use client";

import { useState } from "react";
import IconMinus from "@/components/IconMinus";
import IconPlus from "@/components/IconPlus";
import StepButton from "@/components/StepButton";

// Figma "Stepper": − 값 + 로 숫자를 고른다 (예: 동반 인원)
// 최솟값이면 − 버튼이, 최댓값이면 + 버튼이 disabled가 된다
// value를 주면 부모가 값을 관리하고, 안 주면 이 컴포넌트가 스스로 기억한다
type StepperProps = {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  label?: string; // 화면 읽기용 이름 (예: "동반 인원")
};

export default function Stepper({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = Infinity,
  unit = "명",
  label = "인원",
}: StepperProps) {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const current = value ?? innerValue;

  function change(next: number) {
    if (next < min || next > max) return;
    setInnerValue(next);
    onChange?.(next);
  }

  return (
    <div className="flex items-center gap-stack-sm">
      <StepButton
        aria-label={`${label} 줄이기`}
        icon={<IconMinus className="size-20" />}
        disabled={current <= min}
        onClick={() => change(current - 1)}
      />
      <span aria-live="polite" className="whitespace-nowrap text-heading-md text-text-strong">
        {current}
        {unit}
      </span>
      <StepButton
        aria-label={`${label} 늘리기`}
        icon={<IconPlus className="size-20" />}
        disabled={current >= max}
        onClick={() => change(current + 1)}
      />
    </div>
  );
}
