import Image from "@/components/Image";

// Figma "InvitationCover": 초대장 맨 위 커버 (제목 + 캐릭터 그림 + 일시·장소)
// /create 미리보기와 /i/[id] 에서 같이 쓴다. 제목의 줄바꿈은 입력한 그대로 보인다
type InvitationCoverProps = {
  title: string;
  date: string;
  location: string;
  subtitle?: string;
};

// 일시·장소 한 묶음 (작은 파란 이름표 + 내용)
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full min-w-300 flex-col items-center justify-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold tracking-minus-0-12 text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md tracking-minus-0-28 text-text-inverse">{value}</p>
    </div>
  );
}

export default function InvitationCover({ title, date, location, subtitle }: InvitationCoverProps) {
  return (
    <section className="flex w-full max-w-375 flex-col items-center justify-center gap-page-horizontal overflow-hidden bg-linear-to-b from-cover-gradient-preserved-3 to-cover-gradient-preserved-4 px-page-horizontal py-cover-inset">
      {/* Figma SectionHeader와 같은 배치, 글자색만 흰색 */}
      <div className="flex w-full flex-col items-center gap-stack-md text-center text-text-inverse">
        {subtitle && <p className="w-full text-label-md tracking-minus-0-42 opacity-60">{subtitle}</p>}
        <h1 className="w-full whitespace-pre-line text-title-lg tracking-minus-0-5">{title}</h1>
      </div>
      <Image type="character" alt="펭귄 캐릭터" />
      <Detail label="일시" value={date} />
      <Detail label="장소" value={location} />
    </section>
  );
}
