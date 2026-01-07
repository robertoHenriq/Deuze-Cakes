"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seed() {
    const chocolate = await prisma.category.create({ data: { name: 'Chocolate' } });
    await prisma.cake.createMany({
        data: [
            { name: 'Bolo Chocolate Premium', priceCents: 5000, categoryId: chocolate.id },
            { name: 'Bolo Ninho com Morango', priceCents: 6000, categoryId: chocolate.id },
        ],
    });
    console.log('Seed finished.');
}
seed()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
