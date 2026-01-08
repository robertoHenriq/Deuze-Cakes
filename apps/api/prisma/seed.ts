import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv'; // 1. Importe o dotenv

dotenv.config(); // 2. Carregue as variáveis

const prisma = new PrismaClient();


async function seed() {
await prisma.category.createMany({
data: [
{ name: 'Chocolate', slug: 'chocolate' },
{ name: 'Ninho e Frutas', slug: 'ninho-frutas' },
{ name: 'Caseiros', slug: 'caseiros' }
],
skipDuplicates: true
});


const adminEmail = 'admin@deuze.local';
const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
if (!existing) {
const hash = await bcrypt.hash('password123', 10);
await prisma.user.create({ data: { email: adminEmail, password: hash, name: 'Admin', role: 'ADMIN' } });
console.log('Admin user created: admin@deuze.local / password123');
}


const cat = await prisma.category.findFirst();
if (cat) {
await prisma.cake.createMany({
data: [
{ name: 'Bolo Chocolate Premium', priceCents: 5000, categoryId: cat.id },
{ name: 'Bolo Ninho com Morango', priceCents: 6000, categoryId: cat.id }
],
skipDuplicates: true
});
}


console.log('Seed finished');
}


seed()
.catch((e) => console.error(e))
.finally(async () => {
await prisma.$disconnect();
});