// Figma "StatCard": 응답 현황 숫자 카드. highlight=true는 강조할 합계에만
type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string; // 바깥에서 폭을 정할 때 (예: 줄을 똑같이 나누는 flex-1)
};

export default function StatCard({ label, value, highlight = false, className = "" }: StatCardProps) {
  return (
    <div
      className={`flex w-107 flex-col items-center gap-inline-sm rounded-card px-control-x py-stack-md ${
        highlight ? "bg-info-subtle" : "bg-surface-subtle"
      } ${className}`}
    >
      <span className="text-caption-md text-text-secondary">{label}</span>
      <span className={`text-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}>{value}</span>
    </div>
  );
}
