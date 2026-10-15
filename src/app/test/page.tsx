import type { ReactNode } from "react";
import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import IconCheck from "@/components/IconCheck";
import IconMinus from "@/components/IconMinus";
import IconNone from "@/components/IconNone";
import IconPlus from "@/components/IconPlus";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";

// 실습용 테스트 페이지: 컴포넌트를 종류·상태별로 모두 띄운다
const sizes = ["sm", "md", "lg"] as const;

// 섹션 하나 (제목 + 내용)
function Demo({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h2 className="text-label-lg">{title}</h2>
      {children}
    </section>
  );
}

export default function TestPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col gap-section px-page-horizontal py-section">
      <h1 className="text-heading-lg">Button 테스트</h1>
      <p className="text-body-md text-text-secondary">
        마우스를 올리면 hover 상태를 볼 수 있어요.
      </p>

      {sizes.map((size) => (
        <section key={size} className="flex flex-col gap-stack-sm">
          <h2 className="text-label-lg">size=&quot;{size}&quot;</h2>
          <div className="flex flex-wrap items-center gap-stack-md">
            <Button size={size}>Button</Button>
            <Button size={size} disabled>
              Disabled
            </Button>
          </div>
        </section>
      ))}

      <h1 className="text-heading-lg">컴포넌트 테스트</h1>

      <Demo title="icon/check · icon/plus · icon/minus · icon/none">
        <div className="flex items-center gap-stack-md text-text-primary">
          <IconCheck />
          <IconPlus />
          <IconMinus />
          <span className="border border-dashed border-border-default">
            <IconNone />
          </span>
        </div>
      </Demo>

      <Demo title="SuccessIcon">
        <SuccessIcon />
      </Demo>

      <Demo title="Image (type=character · flag)">
        <div className="flex items-start gap-stack-md">
          <Image type="character" alt="펭귄 캐릭터" />
          <Image type="flag" alt="깃발" />
        </div>
      </Demo>

      <Demo title="Label (required=true · false)">
        <Label label="Label" />
        <Label label="Label" required={false} />
      </Demo>

      <Demo title="AttendanceBadge (status=yes · no)">
        <div className="flex gap-inline-md">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </Demo>

      <Demo title="Radio (default · selected · disabled)">
        <div className="flex">
          <Radio name="radio-demo" aria-label="기본" />
          <Radio name="radio-demo" aria-label="선택됨" defaultChecked />
          <Radio aria-label="비활성" disabled />
        </div>
      </Demo>

      <Demo title="RadioOption">
        <div className="flex">
          <RadioOption name="option-demo" label="참석" defaultChecked />
          <RadioOption name="option-demo" label="불참" />
        </div>
        <RadioOption label="Label" required />
      </Demo>

      <Demo title="StepButton (default · disabled)">
        <div className="flex gap-stack-sm">
          <StepButton aria-label="줄이기" icon={<IconMinus className="size-20" />} />
          <StepButton aria-label="줄이기" icon={<IconMinus className="size-20" />} disabled />
          <StepButton aria-label="늘리기" icon={<IconPlus className="size-20" />} />
        </div>
      </Demo>

      <Demo title="Stepper (0명이면 − 비활성)">
        <Stepper label="동반 인원" defaultValue={1} />
        <Stepper label="동반 인원" defaultValue={0} />
      </Demo>

      <Demo title="InputField (빈 칸 · 값 있음, 눌러 보면 focus)">
        <InputField aria-label="빈 칸" placeholder="placeholder" />
        <InputField aria-label="값 있음" defaultValue="placeholder" />
      </Demo>

      <Demo title="Input">
        <Input label="Label" placeholder="placeholder" />
        <Input label="Label" placeholder="placeholder" showHelper helper="안내 문구" />
      </Demo>

      <Demo title="TextareaField (빈 칸 · 값 있음)">
        <TextareaField aria-label="빈 칸" placeholder="게스트에게 전할 초대 글을 적어주세요" />
        <TextareaField aria-label="값 있음" defaultValue="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo title="Textarea (rows=4 · 2)">
        <Textarea label="Label" placeholder="게스트에게 전할 초대 글을 적어주세요" showHelper helper="엔터로 줄을 나눌 수 있어요" />
        <Textarea label="Label" rows="2" placeholder="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo title="InfoRow (type=inline · spread)">
        <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
        <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
      </Demo>

      <Demo title="StatCard (highlight=false · true)">
        <div className="flex gap-stack-sm">
          <StatCard label="참석" value="2명" />
          <StatCard label="참석" value="2명" highlight />
        </div>
      </Demo>

      <Demo title="ResponseRow">
        <ResponseRow name="김허들" meta="동반 1명" status="yes" />
        <ResponseRow name="이허들" status="no" />
      </Demo>

      <Demo title="CopyLinkField">
        <CopyLinkField
          title="초대장 링크"
          url="https://example.com/i/k3f9x2a7"
          description="게스트에게 공유하는 링크예요."
        />
      </Demo>

      <Demo title="SectionHeader">
        <SectionHeader subtitle="Subtitle" title="title" description="Description" />
      </Demo>

      <Demo title="EmptyState">
        <EmptyState />
      </Demo>

      <Demo title="NavBar">
        <div className="border border-dashed border-border-default">
          <NavBar title="Label" />
        </div>
      </Demo>

      <Demo title="InvitationCover">
        <InvitationCover
          subtitle="Huddling Club 2nd Meetup"
          title={"허들링 클럽 2번째\n오프라인 밋업"}
          date="2026년 11월 14일 (토) 09:00"
          location="세종 남극 기지"
        />
      </Demo>

      <Demo title="RSVPCard (state=form · done)">
        <div className="flex flex-col gap-stack-md bg-surface-subtle p-stack-md">
          <RSVPCard />
          <RSVPCard state="done" response={{ name: "김허들", status: "yes", companions: 1 }} />
        </div>
      </Demo>
    </main>
  );
}
