"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  dateKey,
  formatDate,
  formatTime,
  weekDays,
  type VisitItem,
} from "@/lib/supabase";
import { fetchVisits } from "@/lib/queries";
import { VisitModal } from "@/app/gestao/components/visit-modal";
import { Button, EmptyState } from "@/app/gestao/components/ui";

export default function VisitasPage() {
  const [visits, setVisits] = useState<VisitItem[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<VisitItem | null>(null);
  const [modalKey, setModalKey] = useState(0);

  const load = useCallback(async () => {
    setVisits(await fetchVisits());
  }, []);

  useEffect(() => {
    let active = true;
    fetchVisits().then((data) => {
      if (!active) return;
      setVisits(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const today = dateKey(new Date());
  const upcoming = useMemo(
    () => visits.filter((visit) => visit.date >= today),
    [visits, today]
  );
  const past = useMemo(
    () =>
      visits
        .filter((visit) => visit.date < today)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [visits, today]
  );

  function renderVisit(visit: VisitItem) {
    const weekday = weekDays[new Date(`${visit.date}T12:00:00`).getDay()];
    return (
      <button
        key={visit.id}
        onClick={() => {
          setEditing(visit);
          setModalKey((key) => key + 1);
          setModal(true);
        }}
        className="w-full rounded-xl bg-pink-50 px-4 py-4 text-left transition hover:bg-pink-100"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-pink-900">
              {visit.name}
            </p>
            <p className="mt-0.5 text-sm text-pink-800/80">
              {formatDate(visit.date)} · {weekday} às {formatTime(visit.time)}
            </p>
          </div>
          <span className="rounded-full bg-pink-200 px-3 py-1 text-xs font-semibold text-pink-900">
            Visita
          </span>
        </div>
        {visit.comment ? (
          <p className="mt-2 text-sm leading-relaxed text-pink-900/70">
            {visit.comment}
          </p>
        ) : null}
      </button>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-forest-950">
            Visitas
          </h1>
          <p className="text-sm text-forest-950/55">
            Pessoas que querem conhecer o espaço antes de fechar
          </p>
        </div>
        <Button
          onClick={() => {
            setEditing(null);
            setModalKey((key) => key + 1);
            setModal(true);
          }}
        >
          + Nova visita
        </Button>
      </div>

      <div className="space-y-3">
        {upcoming.length === 0 ? (
          <EmptyState text="Nenhuma visita marcada." />
        ) : null}
        {upcoming.map(renderVisit)}
      </div>

      {past.length > 0 ? (
        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-forest-950/70">
            Visitas anteriores
          </h2>
          <div className="space-y-3 opacity-60">
            {past.map(renderVisit)}
          </div>
        </div>
      ) : null}

      <VisitModal
        key={`visita-${modalKey}`}
        open={modal}
        onClose={() => setModal(false)}
        onSaved={load}
        defaultDate={today}
        visit={editing}
      />
    </div>
  );
}
