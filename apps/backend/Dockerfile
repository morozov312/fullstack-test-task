FROM node:20 AS builder
WORKDIR /app
COPY apps/backend/package*.json ./
RUN npm install
COPY apps/backend/ ./
RUN npm run build

FROM node:20 AS runtime
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY apps/backend/package*.json ./
RUN npm install --production

EXPOSE 3000
CMD ["node", "dist/server.js"]
