-- Explicit policies for the server-only service_role access path.
create policy "auditor_leads_server_read" on public.auditor_leads
  for select to service_role using (true);
create policy "auditor_leads_server_create" on public.auditor_leads
  for insert to service_role with check (true);
create policy "auditor_leads_server_update" on public.auditor_leads
  for update to service_role using (true) with check (true);
