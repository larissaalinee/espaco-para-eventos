"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  brl,
  dateKey,
  durationInHours,
  formatDate,
  formatHours,
  formatTime,
  weekDays,
  type EventItem,
  type VisitItem,
} from "@/lib/supabase";
import { fetchEvents, fetchVisits } from "@/lib/queries";
import { Calendar } from "@/app/gestao/components/calendar";
import { EventModal } from "@/app/gestao/components/event-modal";
import { VisitModal } from "@/app/gestao/components/visit-modal";
import { Button, EmptyState } from "@/app/gestao/components/ui";

export default function AgendaPage() {
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selected, setSelected] = useState(() => dateKey(new Date()));
  const [events, setEvents] = useState<EventItem[]>([]);
  const [visits, setVisits] = useState<VisitItem[]>([]);
  const [eventModal, setEventModal] = useState(false);
  const [visitModal, setVisitModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [editingVisit, setEditingVisit] = useState<VisitItem | null>(null);
  const [modalKey, setModalKey] = useState(0);

  const load = useCallback(async () => {
    const [eventsData, visitsData] = await Promise.all([
      fetchEvents(),
      fetchVisits(),
    ]);
    setEvents(eventsData);
    setVisits(visitsData);
  }, []);

  useEffect(() => {
    let active = true;
    Promise.all([fetchEvents(), fetchVisits()]).then(([eventsData, visitsData]) => {
      if (!active) return;
      setEvents(eventsData);
      setVisits(visitsData);
    });
    return () => {
      active = false;
    };
  }, []);

  const dayEvents = useMemo(
    () => events.filter((event) => event.date === selected),
    [events, selected]
  );
  const dayVisits = useMemo(
    () => visits.filter((visit) => visit.date === selected),
    [visits, selected]
  );

  const selectedWeekday = weekDays[new Date(`${selected}T12:00:00`).getDay()];
  const upcoming = useMemo(
    () =>
      events
        .filter((event) => event.date >= dateKey(new Date()))
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, 5),
    [events]
  );

  return (
    <div className="space-y-5">
      <Calendar
        month={month}
        events={events}
        visits={visits}
        selected={selected}
        onSelect={setSelected}
        onMonthChange={setMonth}
      />

      <div className="rounded-2xl border border-forest-950/5 bg-white p-5 shadow-sm">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-lg font-bold text-forest-950">
            {formatDate(selected)}
          </h2>
          <span className="text-xs capitalize text-forest-950/50">
            {selectedWeekday}
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {dayEvents.length === 0 && dayVisits.length === 0 ? (
            <p className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900">
              Dia disponível
            </p>
          ) : null}

          {dayEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => {
                setEditingEvent(event);
                setModalKey((key) => key + 1);
                setEventModal(true);
              }}
              className="w-full rounded-xl bg-rose-50 px-4 py-3 text-left transition hover:bg-rose-100"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-rose-900">
                    {event.name}
                  </p>
                  <p className="mt-0.5 text-sm text-rose-800/80">
                    {formatTime(event.start_time)} às {formatTime(event.end_time)}
                    {" · "}
                    {formatHours(durationInHours(event.start_time, event.end_time))}
                  </p>
                </div>
                <p className="text-sm font-semibold text-rose-900">
                  {brl(event.total_value)}
                </p>
              </div>
              {event.notes ? (
                <p className="mt-2 text-xs text-rose-800/70">{event.notes}</p>
              ) : null}
            </button>
          ))}

          {dayVisits.map((visit) => (
            <button
              key={visit.id}
              onClick={() => {
                setEditingVisit(visit);
                setModalKey((key) => key + 1);
                setVisitModal(true);
              }}
              className="w-full rounded-xl bg-pink-50 px-4 py-3 text-left transition hover:bg-pink-100"
            >
              <p className="text-base font-semibold text-pink-900">
                Visita · {visit.name}
              </p>
              <p className="mt-0.5 text-sm text-pink-800/80">
                às {formatTime(visit.time)}
              </p>
              {visit.comment ? (
                <p className="mt-2 text-xs text-pink-800/70">{visit.comment}</p>
              ) : null}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={() => {
              setEditingEvent(null);
              setModalKey((key) => key + 1);
              setEventModal(true);
            }}
            className="flex-1"
          >
            + Novo evento
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setEditingVisit(null);
              setModalKey((key) => key + 1);
              setVisitModal(true);
            }}
            className="flex-1"
          >
            + Nova visita
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-forest-950/5 bg-white p-5 shadow-sm">
        <h2 className="font-display text-lg font-bold text-forest-950">
          Próximos eventos
        </h2>
        <div className="mt-4 space-y-2">
          {upcoming.length === 0 ? (
            <EmptyState text="Nenhum evento agendado ainda." />
          ) : null}
          {upcoming.map((event) => (
            <button
              key={event.id}
              onClick={() => {
                setSelected(event.date);
                setMonth(
                  new Date(
                    Number(event.date.slice(0, 4)),
                    Number(event.date.slice(5, 7)) - 1,
                    1
                  )
                );
              }}
              className="flex w-full items-center justify-between gap-3 rounded-xl bg-forest-950/5 px-4 py-3 text-left transition hover:bg-forest-950/10"
            >
              <div>
                <p className="text-sm font-semibold text-forest-950">
                  {event.name}
                </p>
                <p className="text-xs text-forest-950/60">
                  {formatDate(event.date)} · {formatTime(event.start_time)}
                </p>
              </div>
              <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
                {brl(event.total_value)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <EventModal
        key={`evento-${modalKey}`}
        open={eventModal}
        onClose={() => setEventModal(false)}
        onSaved={load}
        defaultDate={selected}
        event={editingEvent}
      />
      <VisitModal
        key={`visita-${modalKey}`}
        open={visitModal}
        onClose={() => setVisitModal(false)}
        onSaved={load}
        defaultDate={selected}
        visit={editingVisit}
      />
    </div>
  );
}
