/* eslint-disable @typescript-eslint/no-empty-object-type */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          access_token: string | null
          expires_at: number | null
          id: string
          id_token: string | null
          provider: string
          providerAccountId: string
          refresh_token: string | null
          scope: string | null
          session_state: string | null
          token_type: string | null
          type: string
          userId: string
        }
        Insert: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider: string
          providerAccountId: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type: string
          userId: string
        }
        Update: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider?: string
          providerAccountId?: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string
          corrected_text: string | null
          created_at: string | null
          explanation: string | null
          has_correction: boolean | null
          id: string
          original_text: string | null
          role: string
          session_id: string
        }
        Insert: {
          content: string
          corrected_text?: string | null
          created_at?: string | null
          explanation?: string | null
          has_correction?: boolean | null
          id?: string
          original_text?: string | null
          role: string
          session_id: string
        }
        Update: {
          content?: string
          corrected_text?: string | null
          created_at?: string | null
          explanation?: string | null
          has_correction?: boolean | null
          id?: string
          original_text?: string | null
          role?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string | null
          id: string
          lesson_id: string | null
          summary: string | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          lesson_id?: string | null
          summary?: string | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          lesson_id?: string | null
          summary?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_sessions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      flashcard_review_logs: {
        Row: {
          flashcard_id: string
          id: string
          rating: number
          response_time_ms: number | null
          reviewed_at: string
          user_id: string
        }
        Insert: {
          flashcard_id: string
          id?: string
          rating: number
          response_time_ms?: number | null
          reviewed_at?: string
          user_id: string
        }
        Update: {
          flashcard_id?: string
          id?: string
          rating?: number
          response_time_ms?: number | null
          reviewed_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flashcard_review_logs_flashcard_id_fkey"
            columns: ["flashcard_id"]
            isOneToOne: false
            referencedRelation: "flashcards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flashcard_review_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      flashcards: {
        Row: {
          created_at: string
          ease_factor: number
          english_text: string
          example_sentence: string | null
          id: string
          image_url: string | null
          interval: number
          is_mastered: boolean
          last_rating: number | null
          last_review_date: string | null
          lesson_id: string | null
          next_review_date: string
          repetitions: number
          spanish_text: string
          total_correct: number
          total_reviews: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          ease_factor?: number
          english_text: string
          example_sentence?: string | null
          id?: string
          image_url?: string | null
          interval?: number
          is_mastered?: boolean
          last_rating?: number | null
          last_review_date?: string | null
          lesson_id?: string | null
          next_review_date?: string
          repetitions?: number
          spanish_text: string
          total_correct?: number
          total_reviews?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          ease_factor?: number
          english_text?: string
          example_sentence?: string | null
          id?: string
          image_url?: string | null
          interval?: number
          is_mastered?: boolean
          last_rating?: number | null
          last_review_date?: string | null
          lesson_id?: string | null
          next_review_date?: string
          repetitions?: number
          spanish_text?: string
          total_correct?: number
          total_reviews?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flashcards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          content: string
          createdAt: string | null
          description: string
          difficulty: Database["public"]["Enums"]["Difficulty"]
          durationMinutes: number | null
          grammarJson: Json | null
          id: string
          imageUrl: string | null
          isPublished: boolean | null
          level: string
          order: number
          slug: string
          title: string
          updatedAt: string | null
          vocabularyJson: Json | null
        }
        Insert: {
          content: string
          createdAt?: string | null
          description: string
          difficulty: Database["public"]["Enums"]["Difficulty"]
          durationMinutes?: number | null
          grammarJson?: Json | null
          id?: string
          imageUrl?: string | null
          isPublished?: boolean | null
          level: string
          order: number
          slug: string
          title: string
          updatedAt?: string | null
          vocabularyJson?: Json | null
        }
        Update: {
          content?: string
          createdAt?: string | null
          description?: string
          difficulty?: Database["public"]["Enums"]["Difficulty"]
          durationMinutes?: number | null
          grammarJson?: Json | null
          id?: string
          imageUrl?: string | null
          isPublished?: boolean | null
          level?: string
          order?: number
          slug?: string
          title?: string
          updatedAt?: string | null
          vocabularyJson?: Json | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sessions: {
        Row: {
          expires: string
          id: string
          sessionToken: string
          userId: string
        }
        Insert: {
          expires: string
          id?: string
          sessionToken: string
          userId: string
        }
        Update: {
          expires?: string
          id?: string
          sessionToken?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_lesson_progress: {
        Row: {
          completedAt: string | null
          id: string
          isCompleted: boolean | null
          lastAccessedAt: string | null
          lessonId: string
          quizScore: number | null
          startedAt: string | null
          timeSpentMinutes: number | null
          userId: string
        }
        Insert: {
          completedAt?: string | null
          id?: string
          isCompleted?: boolean | null
          lastAccessedAt?: string | null
          lessonId: string
          quizScore?: number | null
          startedAt?: string | null
          timeSpentMinutes?: number | null
          userId: string
        }
        Update: {
          completedAt?: string | null
          id?: string
          isCompleted?: boolean | null
          lastAccessedAt?: string | null
          lessonId?: string
          quizScore?: number | null
          startedAt?: string | null
          timeSpentMinutes?: number | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_progress_lessonId_fkey"
            columns: ["lessonId"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_progress_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          createdAt: string | null
          email: string | null
          emailVerified: string | null
          id: string
          image: string | null
          lastActiveDate: string | null
          level: string | null
          name: string | null
          password: string | null
          role: string | null
          streak: number | null
          totalStudyMinutes: number | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          email?: string | null
          emailVerified?: string | null
          id?: string
          image?: string | null
          lastActiveDate?: string | null
          level?: string | null
          name?: string | null
          password?: string | null
          role?: string | null
          streak?: number | null
          totalStudyMinutes?: number | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          email?: string | null
          emailVerified?: string | null
          id?: string
          image?: string | null
          lastActiveDate?: string | null
          level?: string | null
          name?: string | null
          password?: string | null
          role?: string | null
          streak?: number | null
          totalStudyMinutes?: number | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      VerificationToken: {
        Row: {
          expires: string
          identifier: string
          token: string
        }
        Insert: {
          expires: string
          identifier: string
          token: string
        }
        Update: {
          expires?: string
          identifier?: string
          token?: string
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
      Difficulty:
        | "BEGINNER"
        | "ELEMENTARY"
        | "INTERMEDIATE"
        | "UPPER_INTERMEDIATE"
        | "ADVANCED"
        | "MASTERY"
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
    Enums: {
      Difficulty: [
        "BEGINNER",
        "ELEMENTARY",
        "INTERMEDIATE",
        "UPPER_INTERMEDIATE",
        "ADVANCED",
        "MASTERY",
      ],
    },
  },
} as const
