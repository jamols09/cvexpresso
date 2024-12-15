import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

const prismaClientSingleton = () => {
  return prismaClient
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma