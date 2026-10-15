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
