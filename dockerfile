# Base Image: Use a slim Node.js image for production efficiency
FROM node:18-alpine

# Working Directory: Set the working directory within the container
WORKDIR /app

# Copy and Install Dependencies:
#   - Copy only package.json and package-lock.json for caching optimization
#   - Install dependencies in production mode
COPY package*.json ./
RUN npm ci && npm install -D serve


# Copy Frontend Code: Copy the rest of your frontend application code
COPY . .

# Build for Production: Build the Vite project for production
RUN npm run build

# Expose the Port: Expose the port Vite uses in production (usually 5173)
EXPOSE 5173

# Start Command: Use a production-ready web server like 'serve'
CMD ["npx", "serve", "-s", "build"] 
