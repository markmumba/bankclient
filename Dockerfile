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
# Expose the port that the server will run on
EXPOSE 8000

# Start the Nginx server
CMD ["npm", "run", "dev"]

