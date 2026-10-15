import AttendanceBadge from "@/components/AttendanceBadge";

// Figma "ResponseRow/true": 응답 현황 목록 한 줄 (이름 + 부가 정보 + 참석 배지)
// 불참이면 meta에 동반 인원을 넣지 않는다
type ResponseRowProps = {
  name: string;
  meta?: string;
  status: "yes" | "no";
};

export default function ResponseRow({ name, meta, status }: ResponseRowProps) {
  return (
    <div className="flex h-78 w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md">
      <div className="flex min-w-1 flex-1 flex-col items-start gap-inline-sm overflow-hidden whitespace-nowrap">
        <p className="text-label-lg text-text-primary">{name}</p>
        {meta && <p className="text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
