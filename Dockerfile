# Base Image: Use a slim Node.js image for production efficiency
FROM node:18-alpine

# Working Directory: Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json for caching optimization
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm install

# Copy Frontend Code: Copy the rest of your frontend application code
COPY . .

# Build for Production: Build the Vite project for production
RUN npm run build

# Expose the Port: Expose the port Vite uses in production (commonly 5173)
EXPOSE 8000

# Start Command: Use a production-ready web server like 'serve'
CMD ["npm", "run", "preview"]
