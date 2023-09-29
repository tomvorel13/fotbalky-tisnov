export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      hraci: {
        Row: {
          created_at: string
          id: string
          jmeno: string
          prijmeni: string
        }
        Insert: {
          created_at?: string
          id?: string
          jmeno: string
          prijmeni: string
        }
        Update: {
          created_at?: string
          id?: string
          jmeno?: string
          prijmeni?: string
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
