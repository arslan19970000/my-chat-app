import { createClient } from "@supabase/supabase-js"

const supabaseUrl="https://whqqsnxighjeqqhhithe.supabase.co"
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndocXFzbnhpZ2hqZXFxaGhpdGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4ODc1NTEsImV4cCI6MjA2NTQ2MzU1MX0.6o9eE9h4gNqdBseBrzgRSj800t8B5Cc0INuPMFlt_G0"
export const supabase = createClient(supabaseUrl ,supabaseAnonKey)