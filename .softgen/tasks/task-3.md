---
title: AI Tutor Chat System
status: done
priority: high
type: feature
tags: [ai, chat, tutor, openai, streaming]
created_by: agent
created_at: 2026-08-09T07:30:00Z
position: 3
---

## Notes
Implement AI-powered Spanish tutor chat with Sofía persona.
- Prisma schema: ChatSession, ChatMessage models
- System prompt builder with level adaptation and correction protocol
- Correction parser for AI responses
- Streaming chat API with OpenAI
- Chat session list, individual chat, and lesson-linked chat pages
- Components: ChatBubble, CorrectionDisplay, ChatInput
- Custom hook for managing chat state and streaming

## Checklist
- [x] Update Prisma schema with ChatSession and ChatMessage
- [x] Generate Prisma client with new models
- [x] Create lib/ai/tutor-prompt.ts
- [x] Create lib/ai/parse-correction.ts
- [x] Create API route: /api/tutor/chat (POST with streaming)
- [x] Create chat session list page
- [x] Create individual chat page with streaming
- [x] Create new chat from lesson page
- [x] Create ChatBubble component
- [x] Create CorrectionDisplay component
- [x] Create ChatInput component
- [x] Create useAITutor hook
- [x] Add chat nav link to Navbar
- [x] Push database schema to Supabase
- [x] Validate build passes

## Acceptance
- User can start new chat sessions
- AI responds in real-time with streaming
- Error corrections show original/corrected/explanation
- Messages persist to database
- Chat works on mobile and desktop