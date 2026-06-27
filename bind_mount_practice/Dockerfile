# Stage 1
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# Stage 2
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["node", "app.js"]