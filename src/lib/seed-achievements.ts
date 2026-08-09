import { PrismaClient } from "@prisma/client";
import { ACHIEVEMENTS } from "./achievements";

const prisma = new PrismaClient();

async function seedAchievements() {
  for (const a of ACHIEVEMENTS) {
    await prisma.achievement.upsert({
      where: { id: a.id },
      update: {},
      create: {
        id: a.id,
        name: a.name,
        description: a.description,
        iconName: a.iconName,
        category: a.category,
        requirementJson: a.requirement,
      },
    });
  }
  console.log("Achievements seeded successfully!");
}

seedAchievements()
  .catch(console.error)
  .finally(() => prisma.$disconnect());