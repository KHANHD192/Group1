-- CreateTable
CREATE TABLE "user_info" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);
