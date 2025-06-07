// PrismaClient 인스턴스를 만드는 곳 (예: lib/prisma.ts)
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: [
    { emit: 'stdout', level: 'query' }, // 실행된 쿼리와 시간(duration)을 콘솔에 출력
    { emit: 'stdout', level: 'info' },
    { emit: 'stdout', level: 'warn' },
    { emit: 'stdout', level: 'error' },
  ],
})

export default prisma

// Log 찍을 때 아래 코드 사용
// import { PrismaClient, Prisma } from '@/shared/libs/generated/prisma'
// interface GlobalWithPrisma {
//   prisma:
//     | PrismaClient<
//         Prisma.PrismaClientOptions,
//         'query' | 'info' | 'warn' | 'error'
//       >
//     | undefined
// }
// const globalForPrisma = global as unknown as GlobalWithPrisma

// let prisma: PrismaClient<
//   Prisma.PrismaClientOptions,
//   'query' | 'info' | 'warn' | 'error'
// >

// if (globalForPrisma.prisma) {
//   prisma = globalForPrisma.prisma
// } else {
//   prisma = new PrismaClient({
//     log: [
//       { emit: 'stdout', level: 'info' },
//       { emit: 'stdout', level: 'warn' },
//       { emit: 'stdout', level: 'error' },
//     ],
//   })
//   // The following line was redundant and potentially incorrect.
//   // prisma is already assigned above.
//   // globalForPrisma.prisma || (prisma = new PrismaClient({ log: logDefinitions }))
// }

// // prisma.$on('query', (e: Prisma.QueryEvent) => {
// //   const timestamp = new Date().toISOString()
// //   console.log(`[${timestamp}] Query: ${e.query}`)
// //   console.log(`[${timestamp}] Params: ${e.params}`)
// //   console.log(`[${timestamp}] Duration: ${e.duration}ms`)
// // })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
// export default prisma
