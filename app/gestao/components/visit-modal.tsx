"use client";

import { useState } from "react";
import {
  formatDate,
  formatTime,
  supabase,
  weekDays,
  type VisitItem,
} from "@/lib/supabase";
import { Button, Field, Input, Modal, Textarea } from "./ui";

type Props = {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  defaultDate: string;
  visit?: VisitItem | null;
};

export function VisitModal({
  open,
  onClose,
  onSaved,
  defaultDate,
  visit,
}: Props) {
  const [name, setName] = useState(visit?.name ?? "");
  const [date, setDate] = useState(visit?.date ?? defaultDate);
  const [time, setTime] = useState(formatTime(visit?.time ?? "10:00:00"));
  const [comment, setComment] = useState(visit?.comment ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const weekday = (() => {
    if (!date) return "";
    return weekDays[new Date(`${date}T12:00:00`).getDay()];
  })();

  async function handleSubmit(submitEvent: React.FormEvent) {
    submitEvent.preventDefault();
    setError("");
    setSaving(true);

    const payload = {
      name: name.trim(),
      date,
      time,
      comment: comment.trim() || null,
    };

    const result = visit
      ? await supabase.from("visits").update(payload).eq("id", visit.id)
      : await supabase.from("visits").insert(payload);

    setSaving(false);

    if (result.error) {
      setError("Não foi possível salvar. Tente novamente.");
      return;
    }

    onSaved();
    onClose();
  }

  async function handleDelete() {
    if (!visit) return;
    setSaving(true);
    await supabase.from("visits").delete().eq("id", visit.id);
    setSaving(false);
    onSaved();
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={visit ? "Editar visita" : "Nova visita"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Nome">
          <Input
            value={name}
            onChange={(changeEvent) => setName(changeEvent.target.value)}
            placeholder="Ex.: Carla e Diego"
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Dia">
            <Input
              type="date"
              value={date}
              onChange={(changeEvent) => setDate(changeEvent.target.value)}
              required
            />
          </Field>
          <Field label="Horário">
            <Input
              type="time"
              value={time}
              onChange={(changeEvent) => setTime(changeEvent.target.value)}
              required
            />
          </Field>
        </div>

        <p className="rounded-full bg-forest-950/5 px-3 py-1.5 text-xs text-forest-950/70">
          {formatDate(date)} · {weekday} às {formatTime(time)}
        </p>

        <Field label="Comentário (opcional)">
          <Textarea
            value={comment}
            onChange={(changeEvent) => setComment(changeEvent.target.value)}
            placeholder="Ex.: churrasco de aniversário, 30 pessoas..."
          />
        </Field>

        {error ? (
          <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </p>
        ) : null}

        <div className="flex gap-3 pt-1">
          {visit ? (
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
              : visit
                ? "Salvar alterações"
                : "Salvar visita"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
