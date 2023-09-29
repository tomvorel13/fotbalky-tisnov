import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/db";

export const db = createClient<Database>(
  import.meta.env.VITE_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);
