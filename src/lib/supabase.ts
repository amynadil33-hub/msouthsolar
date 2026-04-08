import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://ilzpfkzskvahoneaknmu.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImIzOWRiN2Q1LWE4MTQtNGJhZC1iOWU5LTUzYTVkZDdmOTZjOCJ9.eyJwcm9qZWN0SWQiOiJpbHpwZmt6c2t2YWhvbmVha25tdSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc1NTkxNjM3LCJleHAiOjIwOTA5NTE2MzcsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.f8y9L0k4p0hGSFW9ikHX2Ar6RA-aIcPPcrbyiA7SM8k';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };