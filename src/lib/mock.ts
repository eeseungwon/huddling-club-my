// 화면 확인용 가짜 데이터 (docs/PRD.md 기준). Supabase를 연결하면 이 파일 대신 실제 데이터를 쓴다.

// 초대장: 제목 · 일시 · 장소 · 본문
export type Invitation = {
  id: string; // 추측하기 어려운 고유 ID (crypto.randomUUID() 형식)
  title: string;
  dateTime: string; // ISO 형식 날짜·시간 (한국 시간)
  location: string; // 주소를 글자로만 표시
  body: string;
};

// 응답: 이름 · 참석 여부 · 동반 인원
export type Response = {
  id: string;
  invitationId: string; // 어느 초대장에 대한 응답인지
  name: string;
  status: "yes" | "no"; // yes = 참석, no = 불참
  companions: number; // 동반 인원 (본인 제외, 불참이면 0)
};

export const mockInvitation: Invitation = {
  id: "3f8b2c1e-7a4d-4e9b-9c2f-1d6e5a8b0c47",
  title: "올해의 마지막 반짝임,\n우리들의 연말 홈파티",
  dateTime: "2026-12-27T18:00:00+09:00",
  location: "서울 신사동",
  body: "한 해 동안 고마웠던 우리 셋에게.\n잔을 부딪치며 올해를 따뜻하게 마무리하고\n설레는 새해를 함께 맞이해요.\n리본 묶듯 소중한 저녁, 꼭 와줘요.",
};

export const mockResponses: Response[] = [
  {
    id: "a1c4e7f0-2b5d-4c8e-9f1a-3b6d9e2c5f80",
    invitationId: mockInvitation.id,
    name: "김허들",
    status: "yes",
    companions: 2,
  },
  {
    id: "b2d5f8a1-3c6e-4d9f-8a2b-4c7e0f3d6a91",
    invitationId: mockInvitation.id,
    name: "이펭귄",
    status: "no",
    companions: 0,
  },
  {
    id: "c3e6a9b2-4d7f-4e0a-9b3c-5d8f1a4e7b02",
    invitationId: mockInvitation.id,
    name: "박남극",
    status: "yes",
    companions: 0,
  },
];

// 응답이 아직 하나도 없는 초대장 (응답 현황 0건 화면 확인용, /i/empty)
export const mockEmptyInvitation: Invitation = {
  id: "empty",
  title: "허들링 클럽 송년회",
  dateTime: "2026-12-19T18:30:00+09:00",
  location: "서울특별시 중구 세종대로 110",
  body: "한 해 동안 고마웠어요.\n따뜻한 저녁 함께 먹으며 이야기 나눠요.",
};

// 초대장 전체 목록 (mockInvitation은 그대로 두고, 여기에 모아서 찾는다)
export const mockInvitations: Invitation[] = [mockInvitation, mockEmptyInvitation];
