# Step 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Step 2: Serve the application with a lightweight web server
FROM nginx:stable-alpine

# Copy the built files from the builder stage to the nginx web server
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port that the server will run on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

