---
name: reference-figma-file
description: Figma 디자인 파일 위치(fileKey), Tokens 섹션 노드, 그리고 Figma MCP 접속 방식(로컬 데스크톱 서버)
metadata:
  type: reference
---

- Figma 파일 fileKey: `bhd2K5JONXagoYy4lIPhFp` ("HUDDLING CLUB DESIGN SYSTEM")
- node `2168:193` = "Tokens" 섹션 (화면 아님). Color/Spacing/Radius/Typography 토큰 안내서. 2026-10-15에 globals.css에 반영함.
  - Color 2168:194, Spacing 2168:462, Radius 2168:678, Typography 2168:759
- 화면 프레임 URL은 2026-10-15 기준 아직 docs/figma-frames.md에 비어 있음.
- Figma MCP 도구가 에이전트에 직접 연결되지 않은 경우가 있었다. 그때는 Figma 데스크톱 Dev Mode MCP 서버(`http://127.0.0.1:3845/mcp`)에 curl로 JSON-RPC(initialize → tools/call)를 보내 사용했다. 이 서버엔 `create_session`이 없고 nodeId만 넘긴다. 시스템 python3는 동작하지 않아 JSON 파싱은 node로 했다.
- Pretendard는 Google Fonts에 없다. 2026-10-15에 globals.css 맨 위 jsDelivr CDN @import로 불러오기로 정해짐.
- node `2168:1089` = Button 컴포넌트 (size sm/md/lg × state default/hover/disabled) → src/components/Button.tsx. Figma에서 md 기본 배경만 회색(text-secondary)이다.
- 사용자 선호: 토큰 값은 모두 px 단위(행간도 px로 계산), `--spacing: 1px`라 p-20 = 20px.
- node `2168:966` = "Components" 섹션 (컴포넌트 27개, 각 컴포넌트에 Figma 설명문이 있음 — get_design_context 출력 끝 "## 이름" 부분). 2026-10-15에 src/components/에 전부 구현.
  - Figma "Image" 컴포넌트 PNG는 public/images/character.png, flag.png. 아이콘 SVG는 파일 대신 currentColor 인라인 SVG 컴포넌트로 만듦.
  - 섹션 전체 get_design_context는 시간 초과 → 컴포넌트 노드 하나씩 요청해야 함.
- 사용자 원칙: "Figma처럼 그대로" (Button의 md 회색·반투명 hover 등 이상해 보여도 Figma 값 유지).
- /create 프레임: `2168:886`(입력·미리보기), `2168:910`(발행 완료) — docs/figma-frames.md에 기록함 (2026-10-15).
- 주의(2026-10-15 발견): 실행 중인 dev 서버(Turbopack + @tailwindcss/turbopack)가 globals.css의 @theme에 새 토큰을 추가해도 반영 안 될 때가 있었다(touch로도 안 됨). globals.css 내용을 실제로 한 글자 바꾸자 반영됨. 빌드 결과물은 정상. 헤드리스 Chrome은 창 폭이 최소 약 500px라 375px 확인은 max-w 가운데 정렬로 본다.
- /i/[id] 프레임: `2168:923` (커버 + 본문 + 일시·장소 카드 + RSVP 영역). mock id `3f8b2c1e-7a4d-4e9b-9c2f-1d6e5a8b0c47` (src/lib/mock.ts).
- 화면 확인 방법: 헤드리스 Chrome을 --remote-debugging-port로 띄우고 node 내장 WebSocket으로 CDP 조종(Emulation 375px, 입력·클릭, 캡처)하면 됨. dev 서버에는 /_next/mcp (get_errors 등) 엔드포인트가 있음.
- 응답 현황 프레임: `2168:871`(목록 있음), `2168:952`(0건: 카드 0명 + EmptyState). 확인용 주소 별칭: /i/demo(=mock UUID), /i/empty(응답 0건 mock). 참석 인원 합계 = 참석자 본인 1 + 동반 (사용자 확답 전, summarizeResponses에 모음).
- 사용자 규칙(2026-10-15): "새 컴포넌트 금지, 필요하면 보고" — 라우트 폴더용 작은 클라이언트 파일도 새 컴포넌트로 보고 묻고 만들기.
