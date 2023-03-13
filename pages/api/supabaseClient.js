
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dzmstnnlzpkkrexccdzf.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6bXN0bm5senBra3JleGNjZHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2NjI5MDcsImV4cCI6MTk5NDIzODkwN30.cfpC3QwJZaLUZHoqCxDJTdsS9hH3iK_N1tum5Z0Og_s"
export const supabase = createClient(supabaseUrl, supabaseKey)
