"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  brl,
  dateKey,
  formatDate,
  formatTime,
  type CostItem,
  type EventItem,
  type VisitItem,
} from "@/lib/supabase";
import { fetchCosts, fetchEvents, fetchVisits } from "@/lib/queries";
import { CostModal } from "@/app/gestao/components/cost-modal";
import { Button, EmptyState, StatCard } from "@/app/gestao/components/ui";

export default function FinanceiroPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [costs, setCosts] = useState<CostItem[]>([]);
  const [visits, setVisits] = useState<VisitItem[]>([]);
  const [costModal, setCostModal] = useState(false);
  const [editingCost, setEditingCost] = useState<CostItem | null>(null);
  const [modalKey, setModalKey] = useState(0);

  const load = useCallback(async () => {
    const [eventsData, costsData, visitsData] = await Promise.all([
      fetchEvents(),
      fetchCosts(),
      fetchVisits(),
    ]);
    setEvents(eventsData);
    setCosts(costsData);
    setVisits(visitsData);
  }, []);

  useEffect(() => {
    let active = true;
    Promise.all([fetchEvents(), fetchCosts(), fetchVisits()]).then(
      ([eventsData, costsData, visitsData]) => {
        if (!active) return;
        setEvents(eventsData);
        setCosts(costsData);
        setVisits(visitsData);
      }
    );
    return () => {
      active = false;
    };
  }, []);

  const totals = useMemo(() => {
    const totalContratado = events.reduce(
      (sum, event) => sum + Number(event.total_value),
      0
    );
    const totalRecebido = events.reduce(
      (sum, event) => sum + Number(event.deposit),
      0
    );
    const totalCustos = costs.reduce((sum, cost) => sum + Number(cost.amount), 0);
    const aReceber = events.reduce(
      (sum, event) => sum + Number(event.total_value) - Number(event.deposit),
      0
    );

    return {
      totalContratado,
      totalRecebido,
      totalCustos,
      aReceber,
      emCaixa: totalRecebido - totalCustos,
    };
  }, [events, costs]);

  const eventsWithMoney = useMemo(
    () =>
      events
        .filter((event) => Number(event.total_value) > 0)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [events]
  );

  const upcomingVisits = useMemo(
    () =>
      visits
        .filter((visit) => visit.date >= dateKey(new Date()))
        .sort((a, b) => a.date.localeCompare(b.date)),
    [visits]
  );

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="Em caixa"
          value={brl(totals.emCaixa)}
          tone="positive"
        />
        <StatCard label="A receber" value={brl(totals.aReceber)} tone="warning" />
        <StatCard
          label="Total contratado"
          value={brl(totals.totalContratado)}
        />
      </div>

      <div className="rounded-2xl border border-forest-950/5 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-forest-950">
            Custos
          </h2>
          <Button
            onClick={() => {
              setEditingCost(null);
              setModalKey((key) => key + 1);
              setCostModal(true);
            }}
          >
            + Novo custo
          </Button>
        </div>

        <div className="mt-4 space-y-2">
          {costs.length === 0 ? (
            <EmptyState text="Nenhum custo registrado ainda." />
          ) : null}
          {costs.map((cost) => (
            <button
              key={cost.id}
              onClick={() => {
                setEditingCost(cost);
                setModalKey((key) => key + 1);
                setCostModal(true);
              }}
              className="flex w-full items-center justify-between gap-3 rounded-xl bg-forest-950/5 px-4 py-3 text-left transition hover:bg-forest-950/10"
            >
              <div>
                <p className="text-sm font-semibold text-forest-950">
                  {cost.description}
                </p>
                <p className="text-xs text-forest-950/55">
                  {cost.category} · {formatDate(cost.date)}
                </p>
              </div>
              <span className="text-sm font-semibold text-rose-700">
                - {brl(cost.amount)}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-forest-950/10 pt-4 text-sm">
          <span className="text-forest-950/60">Total de custos</span>
          <span className="font-semibold text-forest-950">
            {brl(totals.totalCustos)}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-forest-950/5 bg-white p-5 shadow-sm">
        <h2 className="font-display text-lg font-bold text-forest-950">
          Eventos e valores
        </h2>
        <div className="mt-4 space-y-2">
          {eventsWithMoney.length === 0 ? (
            <EmptyState text="Nenhum evento com valor lançado." />
          ) : null}
          {eventsWithMoney.map((event) => (
            <div
              key={event.id}
              className="rounded-xl bg-forest-950/5 px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-forest-950">
                    {event.name}
                  </p>
                  <p className="text-xs text-forest-950/55">
                    {formatDate(event.date)} · {formatTime(event.start_time)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-forest-950">
                  {brl(event.total_value)}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-forest-700/10 px-2.5 py-1 font-medium text-forest-800">
                  Sinal {brl(event.deposit)}
                </span>
                <span className="rounded-full bg-sun-400/20 px-2.5 py-1 font-medium text-forest-800">
                  Falta {brl(Number(event.total_value) - Number(event.deposit))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {upcomingVisits.length > 0 ? (
        <div className="rounded-2xl border border-forest-950/5 bg-white p-5 shadow-sm">
          <h2 className="font-display text-lg font-bold text-forest-950">
            Visitas marcadas
          </h2>
          <div className="mt-4 space-y-2">
            {upcomingVisits.map((visit) => (
              <div
                key={visit.id}
                className="rounded-xl bg-pink-50 px-4 py-3"
              >
                <p className="text-sm font-semibold text-pink-900">
                  {visit.name} · {formatTime(visit.time)}
                </p>
                <p className="text-xs text-pink-800/70">
                  {formatDate(visit.date)}
                  {visit.comment ? ` · ${visit.comment}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <CostModal
        key={`custo-${modalKey}`}
        open={costModal}
        onClose={() => setCostModal(false)}
        onSaved={load}
        cost={editingCost}
      />
    </div>
  );
}
