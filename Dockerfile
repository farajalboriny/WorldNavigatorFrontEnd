# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12.7-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
ARG configuration=production
COPY . .
RUN npm run build -- --output-path=./dist/out --configuration $configuration
COPY . .
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#Copy default nginx configuration

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
