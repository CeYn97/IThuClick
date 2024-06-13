// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddsqlfktlmuwjjiaxsqz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkc3FsZmt0bG11d2pqaWF4c3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNzY4OTIsImV4cCI6MjAzMzg1Mjg5Mn0.l3mAXOa9DkApUvMpKgwNFuSCGCZCbsV1Zvu6AhuiZlc';
export const supabase = createClient(supabaseUrl, supabaseKey);
