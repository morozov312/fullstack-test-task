FROM node:20 AS builder
WORKDIR /app
COPY apps/frontend/ ./

RUN npm install
COPY apps/frontend/ ./
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html
COPY ../../nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
