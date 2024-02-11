# Use an official Node.js runtime as the base image
FROM node:20.11.0-alpine3.19

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable for OPENAI_KEY using a build argument
ARG OPENAI_KEY
ENV OPENAI_KEY $OPENAI_KEY
ENV PORT 3000

# Build the app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "./build/index.js"]