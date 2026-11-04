import type { Metadata } from "next";
import { PrivacyView } from "@/components/PrivacyView";

export const metadata: Metadata = {
  description: "Как Maria обрабатывает данные из анкеты.",
};

export default function Page() {
  return <PrivacyView />;
}
