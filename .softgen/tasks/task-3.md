---
title: AI Tutor Chat System
status: in_progress
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
- [ ] Update Prisma schema with ChatSession and ChatMessage
- [ ] Generate Prisma client with new models
- [ ] Create lib/ai/tutor-prompt.ts
- [ ] Create lib/ai/parse-correction.ts
- [ ] Create API route: /api/tutor/chat (POST with streaming)
- [ ] Create chat session list page
- [ ] Create individual chat page with streaming
- [ ] Create new chat from lesson page
- [ ] Create ChatBubble component
- [ ] Create CorrectionDisplay component
- [ ] Create ChatInput component
- [ ] Create useAITutor hook
- [ ] Add chat nav link to Navbar
- [ ] Validate build passes

## Acceptance
- User can start new chat sessions
- AI responds in real-time with streaming
- Error corrections show original/corrected/explanation
- Messages persist to database
- Chat works on mobile and desktop