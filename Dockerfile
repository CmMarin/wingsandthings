FROM node:20-slim AS build

# Set working directory
WORKDIR /app

# Copy package and lock files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the project
RUN npm run build

# Use a lightweight NGINX server to serve the static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (Fly.io default internal port is typically 8080 or 80)
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]