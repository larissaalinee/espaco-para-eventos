"use client";

import { useState } from "react";
import {
  brl,
  durationInHours,
  formatDate,
  formatHours,
  formatTime,
  supabase,
  toNumber,
  weekDays,
  type EventItem,
} from "@/lib/supabase";
import { Button, Field, Input, Modal, Textarea } from "./ui";

type Props = {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  defaultDate: string;
  event?: EventItem | null;
};

export function EventModal({
  open,
  onClose,
  onSaved,
  defaultDate,
  event,
}: Props) {
  const [name, setName] = useState(event?.name ?? "");
  const [date, setDate] = useState(event?.date ?? defaultDate);
  const [startTime, setStartTime] = useState(
    formatTime(event?.start_time ?? "18:00:00")
  );
  const [endTime, setEndTime] = useState(formatTime(event?.end_time ?? "23:00:00"));
  const [totalValue, setTotalValue] = useState(
    event ? String(event.total_value).replace(".", ",") : ""
  );
  const [deposit, setDeposit] = useState(
    event ? String(event.deposit).replace(".", ",") : ""
  );
  const [notes, setNotes] = useState(event?.notes ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const total = toNumber(totalValue);
  const sinal = toNumber(deposit);
  const restante = total - sinal;
  const hours = durationInHours(startTime, endTime);

  const weekday = (() => {
    if (!date) return "";
    const parsed = new Date(`${date}T12:00:00`);
    return weekDays[parsed.getDay()];
  })();

  function suggestDeposit(value: string) {
    setTotalValue(value);
    const parsed = toNumber(value);
    setDeposit(parsed ? String((parsed * 0.3).toFixed(2)).replace(".", ",") : "");
  }

  async function handleSubmit(submitEvent: React.FormEvent) {
    submitEvent.preventDefault();
    setError("");
    setSaving(true);

    const payload = {
      name: name.trim(),
      date,
      start_time: startTime,
      end_time: endTime,
      total_value: total,
      deposit: sinal,
      notes: notes.trim() || null,
    };

    const result = event
      ? await supabase.from("events").update(payload).eq("id", event.id)
      : await supabase.from("events").insert(payload);

    setSaving(false);

    if (result.error) {
      setError("Não foi possível salvar. Tente novamente.");
      return;
    }

    onSaved();
    onClose();
  }

  async function handleDelete() {
    if (!event) return;
    setSaving(true);
    await supabase.from("events").delete().eq("id", event.id);
    setSaving(false);
    onSaved();
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={event ? "Editar evento" : "Novo evento"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Nome (quem fechou o evento)">
          <Input
            value={name}
            onChange={(changeEvent) => setName(changeEvent.target.value)}
            placeholder="Ex.: Ana Paula"
            required
          />
        </Field>

        <Field label="Data do evento">
          <Input
            type="date"
            value={date}
            onChange={(changeEvent) => setDate(changeEvent.target.value)}
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Início">
            <Input
              type="time"
              value={startTime}
              onChange={(changeEvent) => setStartTime(changeEvent.target.value)}
              required
            />
          </Field>
          <Field label="Fim">
            <Input
              type="time"
              value={endTime}
              onChange={(changeEvent) => setEndTime(changeEvent.target.value)}
              required
            />
          </Field>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-forest-950/5 px-3 py-1.5 text-forest-950/70">
            {formatDate(date)} · {weekday}
          </span>
          <span className="rounded-full bg-forest-950/5 px-3 py-1.5 text-forest-950/70">
            {formatHours(hours)} de evento
          </span>
        </div>

        <Field label="Valor do evento (R$)" hint="Sugerimos 30% de sinal">
          <Input
            inputMode="decimal"
            value={totalValue}
            onChange={(changeEvent) => suggestDeposit(changeEvent.target.value)}
            placeholder="0,00"
            required
          />
        </Field>

        <Field label="Sinal pago (R$)">
          <Input
            inputMode="decimal"
            value={deposit}
            onChange={(changeEvent) => setDeposit(changeEvent.target.value)}
            placeholder="0,00"
            required
          />
        </Field>

        <div className="flex items-center justify-between rounded-xl bg-forest-900 px-4 py-3 text-cream-50">
          <span className="text-sm">Falta pagar</span>
          <span className="font-display text-lg font-bold">{brl(restante)}</span>
        </div>

        <Field label="Observações (opcional)">
          <Textarea
            value={notes}
            onChange={(changeEvent) => setNotes(changeEvent.target.value)}
            placeholder="Ex.: chá de bebê, 40 convidados, leva decorado..."
          />
        </Field>

        {error ? (
          <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </p>
        ) : null}

        <div className="flex gap-3 pt-1">
          {event ? (
            <Button
              type="button"
              variant="danger"
              onClick={handleDelete}
              disabled={saving}
            >
              Excluir
            </Button>
          ) : null}
          <Button type="submit" disabled={saving} className="flex-1">
            {saving
              ? "Salvando..."
              : event
                ? "Salvar alterações"
                : "Salvar evento"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
