// Figma "InfoRow": 라벨-값 한 줄
// type=inline: 라벨 | 값 을 붙여서 · spread: 라벨은 왼쪽, 값은 오른쪽 끝
type InfoRowProps = {
  label: string;
  value: string;
  type?: "inline" | "spread";
};

export default function InfoRow({ label, value, type = "inline" }: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className="flex w-full items-center gap-control-compact">
        <span className="whitespace-nowrap text-body-md text-text-secondary">{label}</span>
        <span className="min-w-1 flex-1 text-right text-label-md text-text-strong">{value}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-control-compact whitespace-nowrap text-label-lg">
      <span className="text-text-secondary">{label}</span>
      <span aria-hidden="true" className="h-14 w-1 shrink-0 bg-border-default" />
      <span className="text-text-strong">{value}</span>
    </div>
  );
}
