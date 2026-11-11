"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { Button, Field, Input } from "@/app/gestao/components/ui";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace("/gestao");
    });
  }, [router]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("E-mail ou senha incorretos.");
      setLoading(false);
      return;
    }

    router.replace("/gestao");
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-forest-950 px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="font-display text-2xl font-bold text-cream-50">
            Espaço para Eventos
          </p>
          <p className="mt-1 text-sm text-cream-100/60">
            Acesso ao painel de gestão
          </p>
        </div>

        {!supabaseConfigured ? (
          <p className="rounded-2xl bg-white/10 p-5 text-sm leading-relaxed text-cream-100/80">
            O painel ainda não foi configurado. É preciso conectar o banco de
            dados para conseguir entrar.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl bg-cream-50 p-6 shadow-2xl"
          >
            <Field label="E-mail">
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="voce@email.com"
                autoComplete="email"
                required
              />
            </Field>

            <Field label="Senha">
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </Field>

            {error ? (
              <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {error}
              </p>
            ) : null}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
