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
        <span className="min-w-1 flex-1 break-words text-right text-label-md text-text-strong">{value}</span>
      </div>
    );
  }
  return (
    // 값(일시·장소)이 길면 잘리지 않고 다음 줄로 넘어간다. 라벨은 한 줄 유지
    <div className="flex items-center gap-control-compact text-label-lg">
      <span className="shrink-0 whitespace-nowrap text-text-secondary">{label}</span>
      <span aria-hidden="true" className="h-14 w-1 shrink-0 bg-border-default" />
      <span className="min-w-0 break-words text-text-strong">{value}</span>
    </div>
  );
}
