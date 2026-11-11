import { supabase, type CostItem, type EventItem, type VisitItem } from "./supabase";

export async function fetchEvents(): Promise<EventItem[]> {
  const { data } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });
  return (data ?? []) as EventItem[];
}

export async function fetchVisits(): Promise<VisitItem[]> {
  const { data } = await supabase
    .from("visits")
    .select("*")
    .order("date", { ascending: true });
  return (data ?? []) as VisitItem[];
}

export async function fetchCosts(): Promise<CostItem[]> {
  const { data } = await supabase
    .from("costs")
    .select("*")
    .order("date", { ascending: false });
  return (data ?? []) as CostItem[];
}
