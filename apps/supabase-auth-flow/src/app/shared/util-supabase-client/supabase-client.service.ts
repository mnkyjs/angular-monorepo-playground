import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseConfig } from './config/supabase-config';

@Injectable({
    providedIn: 'root',
})
export class SupabaseClientService {
    private _supabase = createClient(supabaseConfig.url, supabaseConfig.apiKey);

    get supabase(): SupabaseClient {
        return this._supabase;
    }
}
