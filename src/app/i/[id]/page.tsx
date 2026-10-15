import type { Metadata } from "next";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import InvitationCover from "@/components/InvitationCover";
import RSVPCard from "@/components/RSVPCard";
import { formatDateTime, getInvitation, getStaticInvitationParams } from "@/lib/invitations";

// /i/[id] : 게스트가 초대장을 보고 참석 여부를 보내는 화면 (Figma "/i/[id]", node 2168:923)

// 미리 만들어 둘 주소 목록. 진짜 id들 + demo 별칭
// 목록에 없는 id는 처음 열 때 만들어지고, 초대장이 없으면 404가 된다
export async function generateStaticParams() {
  return getStaticInvitationParams();
}

export async function generateMetadata({ params }: PageProps<"/i/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: getInvitation(id).title };
}

export default async function InvitationPage({ params }: PageProps<"/i/[id]">) {
  const { id } = await params;
  const invitation = getInvitation(id);
  const date = formatDateTime(invitation.dateTime);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-mobile flex-col bg-surface-default">
      <InvitationCover title={invitation.title} date={date} location={invitation.location} />

      {/* 본문: 줄바꿈을 입력한 그대로 보여준다 (/create 미리보기와 같은 모양) */}
      <div className="flex w-full flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full whitespace-pre-wrap break-words text-center text-body-compact leading-21 tracking-minus-1 text-text-primary">
          {invitation.body}
        </p>
      </div>

      {/* 일시·장소 카드 (장소는 글자로만) */}
      <div className="w-full bg-surface-default px-page-horizontal pb-section-lg pt-stack-lg">
        <div className="flex w-full flex-col gap-control-compact overflow-hidden rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={date} />
          <InfoRow label="장소" value={invitation.location} />
        </div>
      </div>

      {/* 참석 신청: 제출하면 같은 자리에서 완료 상태로 바뀐다
          주의: 아직 Supabase에 저장하지 않는다. 화면만 바뀐다 */}
      <div className="w-full bg-background-subtle px-page-horizontal pb-60 pt-section-lg">
        <RSVPCard />
      </div>
    </main>
  );
}
