# syntax=docker/dockerfile:1

# Use Node.js LTS as the base image
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts --omit-dev

# Copy source code
COPY . .

# Build the package
RUN --mount=type=cache,target=/root/.npm npm run build

# Install package globally
RUN --mount=type=cache,target=/root/.npm npm link

# Minimal image for runtime
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/bin ./bin
COPY --from=builder /app/node_modules ./node_modules

# Print the environment variables
RUN echo "BEARER_AUTH: $BEARER_AUTH"
RUN echo "PORT: $PORT"
RUN echo "SERVER_URL: $SERVER_URL"
RUN echo "LOG_LEVEL: $LOG_LEVEL"

# Set entrypoint
ENTRYPOINT ["node", "bin/mcp-server.js", "start", "--transport", "sse", "--port", "$PORT", "--bearer-auth", "$BEARER_AUTH", "--server-url", "$SERVER_URL", "--log-level", "$LOG_LEVEL"]