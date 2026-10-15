import IconCheck from "@/components/IconCheck";

// Figma "SuccessIcon": 완료 표시. 연파랑 원(64px) 안에 진파랑 체크(32px)
export default function SuccessIcon() {
  return (
    <span className="flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle">
      {/* 32px로 키워도 선 굵기가 Figma(3px)와 같도록 2.25로 줄인다 */}
      <IconCheck className="size-32 text-info-strong" strokeWidth={2.25} />
    </span>
  );
}
