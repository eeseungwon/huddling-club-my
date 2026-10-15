// Figma "SectionHeader": subtitle · title · description 묶음. 필요 없는 줄은 show* 로 끈다
type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  showSubtitle?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
};

export default function SectionHeader({
  subtitle = "",
  title = "",
  description = "",
  showSubtitle = true,
  showTitle = true,
  showDescription = true,
}: SectionHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center gap-stack-md text-center">
      {showSubtitle && <p className="text-label-md tracking-minus-0-42 text-action-secondary">{subtitle}</p>}
      {showTitle && <h2 className="text-title-lg tracking-minus-0-5 text-text-primary">{title}</h2>}
      {/* 행간 19.6px(label-md)를 쓰고 굵기만 보통(400)으로 바꾼다 */}
      {showDescription && (
        <p className="text-label-md font-normal tracking-minus-1 text-text-primary">{description}</p>
      )}
    </div>
  );
}
