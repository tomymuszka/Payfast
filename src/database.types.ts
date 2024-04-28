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
      locales: {
        Row: {
          address: string
          created_at: string
          id: number
          name: string
          photo_url: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: number
          name: string
          photo_url: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          name?: string
          photo_url?: string
        }
        Relationships: []
      }
      mesas: {
        Row: {
          created_at: string
          estado: Database["public"]["Enums"]["state"]
          id: number
          local: number | null
          valor: number
        }
        Insert: {
          created_at?: string
          estado: Database["public"]["Enums"]["state"]
          id?: number
          local?: number | null
          valor?: number
        }
        Update: {
          created_at?: string
          estado?: Database["public"]["Enums"]["state"]
          id?: number
          local?: number | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_mesas_local_fkey"
            columns: ["local"]
            isOneToOne: false
            referencedRelation: "locales"
            referencedColumns: ["id"]
          }
        ]
      }
      pagos: {
        Row: {
          created_at: string
          id: number
          idPago: string | null
          mesa: number
          "mesa cerrada": boolean
          pedidos: number[]
          valor: number
        }
        Insert: {
          created_at?: string
          id?: number
          idPago?: string | null
          mesa: number
          "mesa cerrada"?: boolean
          pedidos: number[]
          valor?: number
        }
        Update: {
          created_at?: string
          id?: number
          idPago?: string | null
          mesa?: number
          "mesa cerrada"?: boolean
          pedidos?: number[]
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_pagos_mesa_fkey"
            columns: ["mesa"]
            isOneToOne: false
            referencedRelation: "mesas"
            referencedColumns: ["id"]
          }
        ]
      }
      pedidos: {
        Row: {
          created_at: string
          id: number
          local: number
          name: string | null
          payed: boolean
          photo_url: string | null
          price: number
          table: number
        }
        Insert: {
          created_at?: string
          id?: number
          local: number
          name?: string | null
          payed?: boolean
          photo_url?: string | null
          price: number
          table: number
        }
        Update: {
          created_at?: string
          id?: number
          local?: number
          name?: string | null
          payed?: boolean
          photo_url?: string | null
          price?: number
          table?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_pedidos_local_fkey"
            columns: ["local"]
            isOneToOne: false
            referencedRelation: "locales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pedidos_table_fkey"
            columns: ["table"]
            isOneToOne: false
            referencedRelation: "mesas"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      state: "LIBRE" | "OCUPADA" | "PAGADA"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
