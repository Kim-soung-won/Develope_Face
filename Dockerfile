
FROM node:20.18.0 AS builder

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm i

COPY . .

RUN npm run build

FROM node:20.18.0 AS runner
WORKDIR /app

# 프로덕션 환경 설정
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/static ./.next/static
EXPOSE 7100

CMD ["node", "server.js"]