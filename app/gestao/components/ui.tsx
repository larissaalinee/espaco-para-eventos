"use client";

import type { ReactNode } from "react";

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-forest-950/80">
        {label}
      </span>
      {children}
      {hint ? (
        <span className="mt-1 block text-xs text-forest-950/50">{hint}</span>
      ) : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-forest-950/15 bg-white px-4 py-3 text-base text-forest-950 outline-none transition placeholder:text-forest-950/30 focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={`${inputClass} min-h-24 resize-none ${props.className ?? ""}`}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${inputClass} ${props.className ?? ""}`} />
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger" | "whatsapp";
}) {
  const variants = {
    primary: "bg-forest-900 text-cream-50 hover:bg-forest-800",
    ghost: "border border-forest-950/15 text-forest-950 hover:bg-forest-950/5",
    danger: "bg-rose-600 text-white hover:bg-rose-700",
    whatsapp:
      "bg-whatsapp text-forest-950 hover:bg-whatsapp-dark hover:text-white",
  };

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-forest-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream-50 p-6 shadow-2xl sm:rounded-3xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-forest-950">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/5 text-forest-950/60 transition hover:bg-forest-950/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "positive" | "warning";
}) {
  const tones = {
    default: "bg-white text-forest-950",
    positive: "bg-forest-900 text-cream-50",
    warning: "bg-sun-400/20 text-forest-950",
  };

  return (
    <div className={`rounded-2xl border border-forest-950/5 p-5 shadow-sm ${tones[tone]}`}>
      <p className="text-xs font-medium uppercase tracking-wider opacity-60">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <p className="rounded-2xl border border-dashed border-forest-950/15 bg-white/60 p-6 text-center text-sm text-forest-950/50">
      {text}
    </p>
  );
}
