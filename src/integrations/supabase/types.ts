export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_status: string | null
          created_at: string
          id: string
          payment_method: string
          payment_proof_url: string | null
          payment_verified: boolean | null
          session_completed: boolean | null
          slot_id: string
          trainer_id: string
          trainer_notes: string | null
          transaction_id: string | null
          user_email: string
          user_name: string
          user_phone: string | null
        }
        Insert: {
          booking_status?: string | null
          created_at?: string
          id?: string
          payment_method: string
          payment_proof_url?: string | null
          payment_verified?: boolean | null
          session_completed?: boolean | null
          slot_id: string
          trainer_id: string
          trainer_notes?: string | null
          transaction_id?: string | null
          user_email: string
          user_name: string
          user_phone?: string | null
        }
        Update: {
          booking_status?: string | null
          created_at?: string
          id?: string
          payment_method?: string
          payment_proof_url?: string | null
          payment_verified?: boolean | null
          session_completed?: boolean | null
          slot_id?: string
          trainer_id?: string
          trainer_notes?: string | null
          transaction_id?: string | null
          user_email?: string
          user_name?: string
          user_phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_slot_id_fkey"
            columns: ["slot_id"]
            isOneToOne: false
            referencedRelation: "trainer_slots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_trainer_id_fkey"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "trainers"
            referencedColumns: ["id"]
          },
        ]
      }
      demo_requests: {
        Row: {
          company_name: string
          company_size: string
          company_type: string
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          role: string
        }
        Insert: {
          company_name: string
          company_size: string
          company_type: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          phone?: string | null
          role: string
        }
        Update: {
          company_name?: string
          company_size?: string
          company_type?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          role?: string
        }
        Relationships: []
      }
      page_views: {
        Row: {
          browser: string | null
          city: string | null
          country: string | null
          device_type: string | null
          duration_seconds: number | null
          id: string
          ip_address: unknown | null
          os: string | null
          page_path: string
          page_title: string | null
          referrer: string | null
          screen_resolution: string | null
          session_id: string
          timestamp: string
          user_agent: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
          viewport_size: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device_type?: string | null
          duration_seconds?: number | null
          id?: string
          ip_address?: unknown | null
          os?: string | null
          page_path: string
          page_title?: string | null
          referrer?: string | null
          screen_resolution?: string | null
          session_id: string
          timestamp?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          viewport_size?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device_type?: string | null
          duration_seconds?: number | null
          id?: string
          ip_address?: unknown | null
          os?: string | null
          page_path?: string
          page_title?: string | null
          referrer?: string | null
          screen_resolution?: string | null
          session_id?: string
          timestamp?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          viewport_size?: string | null
        }
        Relationships: []
      }
      registered_companies: {
        Row: {
          address: string | null
          company_email: string | null
          company_name: string
          contact_person: string | null
          created_at: string
          employee_count: number | null
          id: string
          industry: string | null
          is_active: boolean
          phone: string | null
          registration_date: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          company_email?: string | null
          company_name: string
          contact_person?: string | null
          created_at?: string
          employee_count?: number | null
          id?: string
          industry?: string | null
          is_active?: boolean
          phone?: string | null
          registration_date?: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          company_email?: string | null
          company_name?: string
          contact_person?: string | null
          created_at?: string
          employee_count?: number | null
          id?: string
          industry?: string | null
          is_active?: boolean
          phone?: string | null
          registration_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      trainer_slots: {
        Row: {
          created_at: string
          end_time: string
          id: string
          is_available: boolean | null
          start_time: string
          trainer_id: string
        }
        Insert: {
          created_at?: string
          end_time: string
          id?: string
          is_available?: boolean | null
          start_time: string
          trainer_id: string
        }
        Update: {
          created_at?: string
          end_time?: string
          id?: string
          is_available?: boolean | null
          start_time?: string
          trainer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trainer_slots_trainer_id_fkey"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "trainers"
            referencedColumns: ["id"]
          },
        ]
      }
      trainers: {
        Row: {
          bio: string | null
          created_at: string
          email: string
          hourly_rate: number | null
          id: string
          name: string
          profile_picture_url: string | null
          specialties: string[] | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email: string
          hourly_rate?: number | null
          id?: string
          name: string
          profile_picture_url?: string | null
          specialties?: string[] | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string
          hourly_rate?: number | null
          id?: string
          name?: string
          profile_picture_url?: string | null
          specialties?: string[] | null
        }
        Relationships: []
      }
      visitor_events: {
        Row: {
          event_data: Json | null
          event_name: string
          event_type: string
          id: string
          page_path: string | null
          session_id: string
          timestamp: string
        }
        Insert: {
          event_data?: Json | null
          event_name: string
          event_type: string
          id?: string
          page_path?: string | null
          session_id: string
          timestamp?: string
        }
        Update: {
          event_data?: Json | null
          event_name?: string
          event_type?: string
          id?: string
          page_path?: string | null
          session_id?: string
          timestamp?: string
        }
        Relationships: []
      }
      visitor_sessions: {
        Row: {
          browser: string | null
          city: string | null
          country: string | null
          device_type: string | null
          entry_page: string | null
          exit_page: string | null
          first_visit: string
          id: string
          is_returning_visitor: boolean | null
          last_activity: string
          os: string | null
          page_views_count: number | null
          session_id: string
          total_duration_seconds: number | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device_type?: string | null
          entry_page?: string | null
          exit_page?: string | null
          first_visit?: string
          id?: string
          is_returning_visitor?: boolean | null
          last_activity?: string
          os?: string | null
          page_views_count?: number | null
          session_id: string
          total_duration_seconds?: number | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device_type?: string | null
          entry_page?: string | null
          exit_page?: string | null
          first_visit?: string
          id?: string
          is_returning_visitor?: boolean | null
          last_activity?: string
          os?: string | null
          page_views_count?: number | null
          session_id?: string
          total_duration_seconds?: number | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      wellness_partners: {
        Row: {
          created_at: string
          id: string
          location: string
          name: string
          services: string[]
          tier: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          location: string
          name: string
          services: string[]
          tier: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          location?: string
          name?: string
          services?: string[]
          tier?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
