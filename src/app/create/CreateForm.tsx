"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";

// Figma "/create"(2168:886) 입력·미리보기 화면 + "/create_published"(2168:910) 발행 완료 화면

// 지금은 데모 연결: 발행하면 항상 데모 초대장(/i/demo)으로 연결한다
// Supabase 연결 후 실제 생성 ID로 바꿀 것 (입력값은 아직 저장되지 않는다)
const PUBLISHED_ID = "demo";

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  // 발행 완료 상태. 사이트 주소(origin)는 발행 버튼을 누를 때 정해진다
  const [published, setPublished] = useState<{ origin: string } | null>(null);

  // 네 칸 모두 필수. 하나라도 비면 발행 버튼을 끈다
  const canPublish = [title, date, location, body].every((value) => value.trim() !== "");

  function publish() {
    if (!canPublish) return;
    // 주의: 아직 Supabase에 저장하지 않는다. 같은 화면을 발행 완료 상태로 바꾸기만 한다
    setPublished({ origin: window.location.origin });
    window.scrollTo(0, 0);
  }

  // ---------- 발행 완료 화면 ----------
  if (published) {
    const invitePath = `/i/${PUBLISHED_ID}`;
    const inviteUrl = `${published.origin}${invitePath}`; // 예: http://localhost:3000/i/demo
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-mobile flex-col gap-page-horizontal bg-surface-default">
        <NavBar title="발행 완료" />
        <main className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
          <div className="flex w-full flex-col items-center gap-stack-sm py-stack-lg text-center">
            <SuccessIcon />
            <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
            <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
          </div>
          <CopyLinkField title="초대장 링크" url={inviteUrl} description="게스트에게 공유하는 링크예요." />
          <CopyLinkField
            title="응답 현황 링크"
            url={`${inviteUrl}/responses`}
            description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
          />
          <Button size="lg" className="w-full" onClick={() => router.push(invitePath)}>
            내 초대장 보기
          </Button>
        </main>
      </div>
    );
  }

  // ---------- 입력 + 미리보기 화면 ----------
  return (
    // pb-92: 화면 아래 고정된 발행 버튼 영역(높이 92px)에 내용이 가리지 않도록 비워 둔다
    <div className="mx-auto flex min-h-screen w-full max-w-mobile flex-col gap-control-compact bg-surface-default pb-92">
      <NavBar title="초대장 만들기" />

      <main className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        {/* 입력 폼 */}
        <div className="flex w-full flex-col gap-stack-lg">
          <Textarea
            label="제목"
            rows="2"
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            showHelper
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            value={title}
            // 최대 2줄: 세 번째 줄부터는 받지 않는다
            onChange={(event) => setTitle(event.target.value.split("\n").slice(0, 2).join("\n"))}
          />
          <Input
            label="일시"
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <Input
            label="장소"
            placeholder="예) 세종 남극 기지"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <Textarea
            label="본문"
            rows="4"
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>

        {/* 실시간 미리보기: 입력한 값을 그대로 보여준다. 이 안에서만 위아래로 스크롤된다 */}
        <section aria-label="미리보기" className="flex w-full flex-col gap-inline-md">
          <Label label="미리보기" required={false} />
          <div className="h-463 w-full overflow-y-auto overflow-x-hidden rounded-control border border-border-subtle">
            <InvitationCover title={title} date={date} location={location} />

            <div className="flex w-full flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
              <Image type="flag" alt="" />
              <p className="w-full whitespace-pre-wrap break-words text-center text-body-compact leading-21 tracking-minus-1 text-text-primary">
                {body}
              </p>
            </div>

            <div className="w-full bg-surface-default px-page-horizontal pb-section-lg pt-stack-lg">
              <div className="flex w-full flex-col gap-control-compact overflow-hidden rounded-card bg-surface-subtle p-page-horizontal">
                <InfoRow label="일시" value={date} />
                <InfoRow label="장소" value={location} />
              </div>
            </div>
          </div>
          <p className="text-caption-md text-text-tertiary">입력하는 내용이 바로 미리보기에 반영돼요.</p>
        </section>
      </main>

      {/* 발행 버튼: 화면 아래에 고정. 375px 폭 안에서 가운데 */}
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-mobile bg-surface-default p-page-horizontal">
        <Button size="lg" className="w-full" disabled={!canPublish} onClick={publish}>
          발행하기
        </Button>
      </div>
    </div>
  );
}
