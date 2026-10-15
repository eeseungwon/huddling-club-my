import type { Metadata } from "next";
import CreateForm from "./CreateForm";

// /create : 호스트가 초대장을 만드는 화면
// 입력·미리보기·발행은 값을 기억해야 해서 CreateForm(클라이언트 컴포넌트)에 둔다
export const metadata: Metadata = {
  title: "초대장 만들기",
};

export default function CreatePage() {
  return <CreateForm />;
}
