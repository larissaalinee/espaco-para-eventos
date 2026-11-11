"use client";

import type { EventItem, VisitItem } from "@/lib/supabase";
import { dateKey, weekDaysShort } from "@/lib/supabase";

type CalendarProps = {
  month: Date;
  events: EventItem[];
  visits: VisitItem[];
  selected: string;
  onSelect: (key: string) => void;
  onMonthChange: (month: Date) => void;
};

const monthName = (date: Date) =>
  date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

export function Calendar({
  month,
  events,
  visits,
  selected,
  onSelect,
  onMonthChange,
}: CalendarProps) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const eventDays = new Set(events.map((event) => event.date));
  const visitDays = new Set(visits.map((visit) => visit.date));
  const today = dateKey(new Date());

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  function shiftMonth(delta: number) {
    onMonthChange(new Date(year, monthIndex + delta, 1));
  }

  return (
    <div className="rounded-2xl border border-forest-950/5 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => shiftMonth(-1)}
          aria-label="Mês anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/5 text-forest-950/70 transition hover:bg-forest-950/10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <p className="font-display text-lg font-semibold capitalize text-forest-950">
          {monthName(month)}
        </p>
        <button
          onClick={() => shiftMonth(1)}
          aria-label="Próximo mês"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/5 text-forest-950/70 transition hover:bg-forest-950/10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[11px] font-medium uppercase tracking-wide text-forest-950/40">
        {weekDaysShort.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          if (day === null) {
            return <span key={`empty-${index}`} />;
          }

          const key = `${year}-${`${monthIndex + 1}`.padStart(2, "0")}-${`${day}`.padStart(2, "0")}`;
          const isEvent = eventDays.has(key);
          const isVisit = !isEvent && visitDays.has(key);
          const isSelected = key === selected;
          const isToday = key === today;

          const tone = isEvent
            ? "bg-rose-500 text-white"
            : isVisit
              ? "bg-pink-300 text-forest-950"
              : "bg-blue-50 text-blue-900";

          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`flex aspect-square items-center justify-center rounded-xl text-sm font-medium transition ${tone} ${
                isSelected
                  ? "ring-2 ring-forest-800 ring-offset-2"
                  : ""
              } ${isToday && !isSelected ? "outline outline-2 outline-forest-700/40" : ""}`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-forest-950/10 pt-4 text-xs text-forest-950/60">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500" /> Reservado
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-pink-300" /> Visita
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-50 ring-1 ring-blue-200" />{" "}
          Disponível
        </span>
      </div>
    </div>
  );
}
