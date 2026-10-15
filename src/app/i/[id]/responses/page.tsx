import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRow from "@/components/ResponseRow";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import {
  formatDateTime,
  getInvitation,
  getResponses,
  getStaticInvitationParams,
  summarizeResponses,
} from "@/lib/invitations";

// /i/[id]/responses : 호스트가 응답 현황을 보는 화면 (Figma "/i/[id]/responses", node 2168:871)
// 비밀키 없이 초대장 id만으로 열린다 (CLAUDE.md "알려진 결정 사항")
// 지금은 가짜 데이터(mock.ts)를 보여준다

// 미리 만들어 둘 주소 목록 (진짜 id들 + demo 별칭). 그 밖의 id는 404
export async function generateStaticParams() {
  return getStaticInvitationParams();
}

export const metadata: Metadata = {
  title: "응답 현황",
};

export default async function ResponsesPage({ params }: PageProps<"/i/[id]/responses">) {
  const { id } = await params;
  const invitation = getInvitation(id);
  const responses = getResponses(invitation.id);
  const summary = summarizeResponses(responses);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-mobile flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="응답 현황" />

      <main className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <SectionHeader
          subtitle="Responses"
          title={invitation.title}
          description={`${formatDateTime(invitation.dateTime)} · ${invitation.location}`}
        />

        {/* 숫자 카드 3개가 한 줄을 똑같이 나눠 쓴다 */}
        <div className="flex w-full gap-inline-md whitespace-nowrap">
          <StatCard className="min-w-1 flex-1" label="참석" value={`${summary.yes}명`} />
          <StatCard className="min-w-1 flex-1" label="불참" value={`${summary.no}명`} />
          <StatCard className="min-w-1 flex-1" label="참석 인원 합계" value={`${summary.totalAttendees}명`} highlight />
        </div>

        <p className="text-caption-md text-text-tertiary">참석 인원 합계 = 참석한 사람 + 동반 인원</p>

        <section className="flex w-full flex-col gap-inline-md">
          <h2 className="text-heading-md text-text-strong">응답 목록</h2>
          {responses.length === 0 ? (
            <EmptyState />
          ) : (
            responses.map((response) => (
              <ResponseRow
                key={response.id}
                name={response.name}
                status={response.status}
                // 불참이면 동반 인원을 적지 않는다 (Figma 설명)
                meta={response.status === "yes" ? `동반 ${response.companions}명` : undefined}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}
