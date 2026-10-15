// Figma "AttendanceBadge": status=yes 참석(파랑) · no 불참(회색)
type AttendanceBadgeProps = {
  status: "yes" | "no";
};

export default function AttendanceBadge({ status }: AttendanceBadgeProps) {
  const isYes = status === "yes";
  return (
    <span
      className={`inline-flex shrink-0 whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md ${
        isYes ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary"
      }`}
    >
      {isYes ? "참석" : "불참"}
    </span>
  );
}
