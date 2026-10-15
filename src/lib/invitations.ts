import { notFound } from "next/navigation";
import { mockInvitation, mockInvitations, mockResponses, type Invitation, type Response } from "@/lib/mock";

// 확인용 별칭: /i/demo 로도 가짜 초대장을 열 수 있게 한다 (진짜 id도 계속 열린다)
export const DEMO_ID = "demo";

// 초대장 1개 가져오기. 없으면 404 화면을 띄운다
// 지금은 가짜 데이터(mock.ts)를 쓴다. Supabase를 붙이면 이 함수 안만 바꾸면 된다
export function getInvitation(id: string): Invitation {
  if (id === DEMO_ID) return mockInvitation;
  const invitation = mockInvitations.find((item) => item.id === id);
  if (!invitation) notFound();
  return invitation;
}

// 미리 만들어 둘 주소 목록 (각 화면의 generateStaticParams에서 쓴다)
// 진짜 id들 + demo 별칭. 여기에 없는 id는 처음 열 때 확인하고, 없으면 404
export function getStaticInvitationParams() {
  return [...mockInvitations.map((item) => ({ id: item.id })), { id: DEMO_ID }];
}

// 한 초대장에 달린 응답 목록 (지금은 가짜 데이터)
export function getResponses(invitationId: string): Response[] {
  return mockResponses.filter((response) => response.invitationId === invitationId);
}

// 응답 현황 숫자 계산은 모두 여기서 한다
// 참석 인원 합계 = 참석한 사람(본인 포함 1명씩) + 그 사람들의 동반 인원
// 계산 방식을 바꾸려면 totalAttendees 한 줄만 고치면 된다
export function summarizeResponses(responses: Response[]) {
  const attending = responses.filter((response) => response.status === "yes");
  return {
    yes: attending.length,
    no: responses.length - attending.length,
    totalAttendees: attending.reduce((sum, response) => sum + 1 + response.companions, 0),
  };
}

// ISO 날짜를 Figma 표시 형식으로: "2026년 11월 14일 (토) 09:00"
// 서버·브라우저 시간대가 달라도 같은 값이 나오도록 한국 시간(Asia/Seoul)으로 고정한다
const formatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function formatDateTime(iso: string): string {
  const parts = Object.fromEntries(
    formatter.formatToParts(new Date(iso)).map((part) => [part.type, part.value]),
  );
  return `${parts.year}년 ${parts.month}월 ${parts.day}일 (${parts.weekday}) ${parts.hour}:${parts.minute}`;
}
