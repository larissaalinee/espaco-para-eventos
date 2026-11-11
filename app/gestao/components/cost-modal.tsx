"use client";

import { useState } from "react";
import { supabase, toNumber, type CostItem } from "@/lib/supabase";
import { Button, Field, Input, Modal, Select } from "./ui";

type Props = {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  cost?: CostItem | null;
};

const categories = ["Limpeza", "Melhorias", "Manutenção", "Outros"];

export function CostModal({ open, onClose, onSaved, cost }: Props) {
  const [description, setDescription] = useState(cost?.description ?? "");
  const [amount, setAmount] = useState(
    cost ? String(cost.amount).replace(".", ",") : ""
  );
  const [category, setCategory] = useState(cost?.category ?? "Outros");
  const [date, setDate] = useState(
    cost?.date ?? new Date().toISOString().slice(0, 10)
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(submitEvent: React.FormEvent) {
    submitEvent.preventDefault();
    setError("");
    setSaving(true);

    const payload = {
      description: description.trim(),
      amount: toNumber(amount),
      category,
      date,
    };

    const result = cost
      ? await supabase.from("costs").update(payload).eq("id", cost.id)
      : await supabase.from("costs").insert(payload);

    setSaving(false);

    if (result.error) {
      setError("Não foi possível salvar. Tente novamente.");
      return;
    }

    onSaved();
    onClose();
  }

  async function handleDelete() {
    if (!cost) return;
    setSaving(true);
    await supabase.from("costs").delete().eq("id", cost.id);
    setSaving(false);
    onSaved();
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={cost ? "Editar custo" : "Novo custo"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Descrição">
          <Input
            value={description}
            onChange={(changeEvent) => setDescription(changeEvent.target.value)}
            placeholder="Ex.: Limpeza da piscina"
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Valor (R$)">
            <Input
              inputMode="decimal"
              value={amount}
              onChange={(changeEvent) => setAmount(changeEvent.target.value)}
              placeholder="0,00"
              required
            />
          </Field>
          <Field label="Data">
            <Input
              type="date"
              value={date}
              onChange={(changeEvent) => setDate(changeEvent.target.value)}
              required
            />
          </Field>
        </div>

        <Field label="Categoria">
          <Select
            value={category}
            onChange={(changeEvent) => setCategory(changeEvent.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>

        {error ? (
          <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </p>
        ) : null}

        <div className="flex gap-3 pt-1">
          {cost ? (
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
            {saving ? "Salvando..." : cost ? "Salvar alterações" : "Salvar custo"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
