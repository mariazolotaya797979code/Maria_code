import type { Metadata } from "next";
import { WorkView } from "@/components/WorkView";

export const metadata: Metadata = {
  description: "Демо-работы Maria: лендинги, боты, системы, автоматизация, продукты и разборы данных.",
};

export default function Page() {
  return <WorkView />;
}
