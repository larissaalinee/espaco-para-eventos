import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseConfigured = Boolean(url && anonKey);

const placeholderKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTUxNjIzOTAyMjJ9.dummy";

export const supabase = createClient(
  url ?? "https://placeholder.supabase.co",
  anonKey ?? placeholderKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

export type EventItem = {
  id: string;
  name: string;
  date: string;
  start_time: string;
  end_time: string;
  total_value: number;
  deposit: number;
  notes: string | null;
};

export type VisitItem = {
  id: string;
  name: string;
  date: string;
  time: string;
  comment: string | null;
};

export type CostItem = {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
};

export const brl = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value) || 0);

export const toNumber = (value: string) => {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const weekDays = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

export const weekDaysShort = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export const dateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatTime = (time: string) => (time ?? "").slice(0, 5);

export const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month, day] = date.split("-").map(Number);
  return `${day}/${month}/${year}`;
};

export const durationInHours = (start: string, end: string) => {
  if (!start || !end) return 0;
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const diff = endMin - startMin;
  return diff > 0 ? Math.round((diff / 60) * 100) / 100 : 0;
};

export const formatHours = (hours: number) =>
  Number.isInteger(hours) ? `${hours}h` : `${hours.toFixed(1).replace(".", ",")}h`;
