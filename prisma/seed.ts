import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: '313d7d88-d266-4bb1-91eb-1ec313f63b68',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details:
        'An event designed for those who are enthusiastic about programming',
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect();
});
