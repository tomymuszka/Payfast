import { createClient } from "@supabase/supabase-js"
import { envs } from "./envs"
import { Database } from "../database.types"


export const supabase = createClient<Database>(envs.SUPABASE_URL,envs.SUPABASE_ANON_KEY)