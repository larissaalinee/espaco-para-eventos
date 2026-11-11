"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { useSession } from "./use-session";

const tabs = [
  { href: "/gestao", label: "Agenda" },
  { href: "/gestao/visitas", label: "Visitas" },
  { href: "/gestao/financeiro", label: "Financeiro" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { session, loading } = useSession();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/gestao/login");
    }
  }, [loading, session, router]);

  if (!supabaseConfigured) {
    return (
      <div className="mx-auto max-w-lg p-6">
        <h1 className="font-display text-2xl font-bold text-forest-950">
          Configuração pendente
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-forest-950/70">
          O painel precisa das credenciais do Supabase para funcionar. Envie a
          URL do projeto e a chave anon para concluir a configuração.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-sm text-forest-950/50">Carregando...</p>
      </div>
    );
  }

  if (!session) return null;

  async function signOut() {
    await supabase.auth.signOut();
    router.replace("/gestao/login");
  }

  return (
    <div className="min-h-svh bg-cream-50 pb-28">
      <header className="sticky top-0 z-30 bg-forest-950 px-4 py-4 text-cream-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div>
            <p className="font-display text-lg font-semibold leading-tight">
              Espaço para Eventos
            </p>
            <p className="text-xs text-cream-100/60">Painel de gestão</p>
          </div>
          <button
            onClick={signOut}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-cream-100/80 transition hover:bg-white/10"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-forest-950/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl">
          {tabs.map((tab) => {
            const active =
              tab.href === "/gestao"
                ? pathname === "/gestao"
                : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 py-4 text-center text-sm font-medium transition ${
                  active
                    ? "text-forest-800"
                    : "text-forest-950/45 hover:text-forest-800"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
