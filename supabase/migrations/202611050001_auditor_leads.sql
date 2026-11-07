-- Datos de contacto e informes generados por Auditor-IA.
-- Acceso exclusivo desde funciones de servidor con la clave service_role.
create table if not exists public.auditor_leads (
  id uuid primary key default gen_random_uuid(),
  lead_name text not null,
  lead_email text not null,
  center_name text,
  center_type text not null,
  town text,
  province text,
  postal_code text,
  answers jsonb not null,
  report jsonb,
  privacy_policy_url text not null,
  consent_at timestamptz not null,
  email_status text not null default 'pending' check (email_status in ('pending', 'sent', 'partial', 'failed')),
  analysis_status text not null default 'processing' check (analysis_status in ('processing', 'completed', 'failed')),
  analysis_error_code text,
  completed_at timestamptz,
  customer_email_id text,
  internal_email_id text,
  created_at timestamptz not null default now()
);

alter table public.auditor_leads enable row level security;

revoke all on table public.auditor_leads from anon, authenticated;
grant select, insert, update on table public.auditor_leads to service_role;


comment on table public.auditor_leads is 'Private lead and diagnostic report records for Hear-O Auditor-IA; server-side service_role only.';
