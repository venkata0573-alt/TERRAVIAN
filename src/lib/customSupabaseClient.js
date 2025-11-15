import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jyskuzgkstyifxjzwuhk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5c2t1emdrc3R5aWZ4anp3dWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMzI4MjMsImV4cCI6MjA3NzcwODgyM30.2YM_W8SyuTlV4rUnFgUL0ggSLT5daILRUYb2bfhRQvI';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
