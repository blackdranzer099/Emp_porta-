# Stage 1: Build React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and install dependencies first (to optimize caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY . . 
RUN npm run build

# Stage 2: Serve React app using Apache
FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs/

# Copy built React app from previous stage
COPY --from=build /app/build ./

# Expose port 80
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd-foreground"]
