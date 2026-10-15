"use client";

import { useId, useState } from "react";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

// Figma "CopyLinkField": 제목 · 링크 칸 · 복사 버튼 · 설명
// 복사 버튼을 누르면 링크가 클립보드에 복사되고, 잠깐 "복사됨"으로 바뀐다
type CopyLinkFieldProps = {
  title: string;
  url: string;
  description?: string;
};

export default function CopyLinkField({ title, url, description }: CopyLinkFieldProps) {
  const id = useId();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 복사가 막힌 브라우저에서는 링크 칸을 직접 길게 눌러 복사하면 된다
    }
  }

  return (
    <div className="flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md">
      <label htmlFor={id} className="whitespace-nowrap text-label-lg text-text-strong">
        {title}
      </label>
      <div className="flex w-full items-center gap-inline-md">
        <InputField id={id} value={url} readOnly className="min-w-1 flex-1" />
        <Button onClick={copy}>{copied ? "복사됨" : "복사"}</Button>
      </div>
      {description && <p className="text-caption-md text-text-tertiary">{description}</p>}
    </div>
  );
}
