# Stage 1: Build Express App
FROM node:20
WORKDIR /app
COPY apps/backend/package*.json ./
RUN npm install
COPY apps/backend/ ./
EXPOSE 3000
CMD ["node", "index.js"]
