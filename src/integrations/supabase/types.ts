export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
