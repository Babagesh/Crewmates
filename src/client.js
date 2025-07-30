import {createClient} from '@supabase/supabase-js'

const URL = 'https://zuyreadklzzbfdqqgyvd.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1eXJlYWRrbHp6YmZkcXFneXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDU4NTIsImV4cCI6MjA2OTQyMTg1Mn0.n6DpLY8CGLJw62Ut6JNrDEA58v7V5xQzfnEQj6zblzE';

export const supabase = createClient(URL, API_KEY);