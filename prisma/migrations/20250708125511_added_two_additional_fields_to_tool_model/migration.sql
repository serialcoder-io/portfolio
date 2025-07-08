-- CreateEnum
CREATE TYPE "ToolType" AS ENUM ('language', 'framework', 'library', 'tool', 'database', 'testing', 'other');

-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "toolType" "ToolType" NOT NULL DEFAULT 'other',
ADD COLUMN     "website" TEXT;
