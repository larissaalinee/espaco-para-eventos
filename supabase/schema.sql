-- Estrutura do painel de gestão do Espaço para Eventos
-- Rode este SQL no SQL Editor do Supabase

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  date date not null,
  start_time time not null,
  end_time time not null,
  total_value numeric(12,2) not null default 0,
  deposit numeric(12,2) not null default 0,
  notes text,
  created_at timestamptz default now()
);

create table if not exists public.visits (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  date date not null,
  time time not null,
  comment text,
  created_at timestamptz default now()
);

create table if not exists public.costs (
  id uuid primary key default gen_random_uuid(),
  description text not null,
  amount numeric(12,2) not null default 0,
  category text not null default 'outros',
  date date not null default current_date,
  created_at timestamptz default now()
);

alter table public.events enable row level security;
alter table public.visits enable row level security;
alter table public.costs enable row level security;

drop policy if exists "acesso autenticado" on public.events;
drop policy if exists "acesso autenticado" on public.visits;
drop policy if exists "acesso autenticado" on public.costs;

create policy "acesso autenticado" on public.events
  for all to authenticated using (true) with check (true);

create policy "acesso autenticado" on public.visits
  for all to authenticated using (true) with check (true);

create policy "acesso autenticado" on public.costs
  for all to authenticated using (true) with check (true);
