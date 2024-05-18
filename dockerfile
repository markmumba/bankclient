# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy frontend code
COPY frontend/. .

# Build the frontend app
RUN npm run build

# Expose the port Vite uses in production
EXPOSE 5173

# Start the app
CMD ["npm", "run", "preview"]
