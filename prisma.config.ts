import { defineConfig } from "prisma/config";

export default defineConfig({
  earlyAccess: true,
  schema: "./prisma/schema.prisma",
  migrate: {
    databaseUrl: process.env.DATABASE_URL,
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});