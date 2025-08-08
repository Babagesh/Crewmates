import {createClient} from '@supabase/supabase-js'
const API_KEY = import.meta.env.VITE_CREWMATE_URL;
const URL = import.meta.env.VITE_CREWMATE_API_KEY;

export const supabase = createClient(URL, API_KEY);