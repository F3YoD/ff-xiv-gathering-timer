FROM node:21-alpine as builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force

FROM node:21-alpine
WORKDIR /app
COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder ./app/dist ./dist
EXPOSE 3000

CMD ["node","dist/src/main.js"]
