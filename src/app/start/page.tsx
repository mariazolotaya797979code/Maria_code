import type { Metadata } from "next";
import { BriefForm } from "@/components/BriefForm";

export const metadata: Metadata = {
  description: "Короткая анкета Maria. Заявка открывается в Telegram и в письме на почту.",
};

export default function Page() {
  return <BriefForm />;
}
