const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      userid: "john_doe",
      name: "John Doe",
      mobileNo: "1234567890",
      age: 30,
      monthlyRevenue: 5000.0,
      password: "$2a$10$aRmNcIHERzAbhA.nMvi3ee4biX4XmI25s5xlgs8Pfh0LAYd/VToAC",
    },
  });

  // Create expenses for the user
  await prisma.expense.createMany({
    data: [
      {
        userId: user.id,
        category: "entertainment",
        amount: 100.0,
        date: new Date(),
      },
      {
        userId: user.id,
        category: "shopping",
        amount: 150.0,
        date: new Date(),
      },
    ],
  });

  console.log("Database has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
