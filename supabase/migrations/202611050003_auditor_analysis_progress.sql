-- Keep the lead answers when AI generation is slow or fails.
alter table public.auditor_leads alter column report drop not null;
alter table public.auditor_leads
  add column if not exists analysis_status text not null default 'processing'
    check (analysis_status in ('processing', 'completed', 'failed'));
alter table public.auditor_leads add column if not exists analysis_error_code text;
alter table public.auditor_leads add column if not exists completed_at timestamptz;

alter table public.auditor_leads enable row level security;
revoke all on table public.auditor_leads from anon, authenticated;
grant select, insert, update on table public.auditor_leads to service_role;
