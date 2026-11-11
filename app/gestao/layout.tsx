import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestão do Espaço | Painel",
  robots: { index: false, follow: false },
};

export default function GestaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-cream-50">{children}</body>
    </html>
  );
}
