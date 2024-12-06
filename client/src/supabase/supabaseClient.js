import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_KEY; // Mengambil dari .env
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Mengambil dari .env

export const supabase = createClient(supabaseUrl, supabaseKey);
