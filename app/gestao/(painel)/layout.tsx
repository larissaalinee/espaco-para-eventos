import { Shell } from "@/app/gestao/components/shell";

export default function PainelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Shell>{children}</Shell>;
}
