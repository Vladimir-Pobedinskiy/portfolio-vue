import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://txmjrqxwivrwsaymwqtq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4bWpycXh3aXZyd3NheW13cXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1MzQ2MDgsImV4cCI6MjAxOTExMDYwOH0.x2lhurNpFMLinriC7sghJXXD1xYmGd4MXvif83kAz80'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
