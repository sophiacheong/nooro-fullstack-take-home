import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialPosts = [
  { title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false, color: '#007AFF' },
  { title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.', completed: false, color: '#FF3B30' },
  { title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.', completed: false, color: '#A2845E' },
];

const seed = async () => {
  await prisma.task.deleteMany();

  for (const post of initialPosts) {
    await prisma.task.create({
      data: post,
    });
  }
};

seed();