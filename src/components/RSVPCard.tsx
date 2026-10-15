"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";

// Figma "RSVPCard": 게스트 참석 응답 카드
// state=form(입력) → 제출하면 같은 자리에서 state=done(완료)으로 바뀐다
// 아직 저장(Supabase)은 하지 않는다. 부모가 onSubmit으로 받아서 저장하면 된다
export type RSVPResponse = {
  name: string;
  status: "yes" | "no";
  companions: number;
};

type RSVPCardProps = {
  state?: "form" | "done";
  response?: RSVPResponse; // state="done"으로 시작할 때 보여줄 내용
  onSubmit?: (response: RSVPResponse) => void;
};

export default function RSVPCard({ state = "form", response, onSubmit }: RSVPCardProps) {
  const [submitted, setSubmitted] = useState<RSVPResponse | null>(
    state === "done" ? (response ?? { name: "", status: "yes", companions: 0 }) : null,
  );
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"yes" | "no">("yes");
  const [companions, setCompanions] = useState(0);

  const canSubmit = name.trim() !== ""; // 필수값(이름)이 비면 버튼을 끈다

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    // 불참이면 동반 인원은 0명으로 보낸다
    const result = { name: name.trim(), status, companions: status === "yes" ? companions : 0 };
    onSubmit?.(result);
    setSubmitted(result);
  }

  if (submitted) {
    return (
      <div className="flex w-full max-w-335 flex-col gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg">
        <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
          <p className="text-body-md text-text-secondary">호스트에게 응답이 전달됐어요.</p>
        </div>
        <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
          <InfoRow type="spread" label="이름" value={submitted.name} />
          <InfoRow type="spread" label="참석 여부" value={submitted.status === "yes" ? "참석" : "불참"} />
          <InfoRow type="spread" label="동반 인원" value={`${submitted.companions}명`} />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-335 flex-col gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg"
    >
      <div className="flex w-full flex-col items-center gap-inline-compact text-center">
        <h2 className="text-heading-lg text-text-strong">참석 여부 알려주기</h2>
        <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
      </div>

      <div className="flex w-full flex-col gap-stack-lg">
        <Input
          label="이름"
          name="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <fieldset className="w-full">
          <legend className="mb-inline-md">
            <Label label="참석 여부" />
          </legend>
          <div className="flex w-full">
            <div className="flex-1">
              <RadioOption
                name="status"
                value="yes"
                label="참석"
                checked={status === "yes"}
                onChange={() => setStatus("yes")}
              />
            </div>
            <div className="flex-1">
              <RadioOption
                name="status"
                value="no"
                label="불참"
                checked={status === "no"}
                onChange={() => setStatus("no")}
              />
            </div>
          </div>
        </fieldset>

        <div className="flex w-full flex-col gap-inline-md">
          <Label label="동반 인원" />
          <Stepper label="동반 인원" value={companions} onChange={setCompanions} />
          <p className="text-caption-md text-text-tertiary">본인을 제외하고 함께 오는 인원이에요.</p>
        </div>
      </div>

      <Button type="submit" size="lg" disabled={!canSubmit} className="w-full">
        참석 여부 보내기
      </Button>
    </form>
  );
}
