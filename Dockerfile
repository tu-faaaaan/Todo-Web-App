# Use the official Node.js image as the base image
FROM node

# Set the working directory within the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json from the local directory to the container
COPY package.json ./

# Install Node.js application dependencies using npm
RUN npm install

# Copy the remaining application files and directories from the local directory to the container
COPY . .

# Expose port 5000 within the container (this is informational and doesn't actually publish the port)
EXPOSE 5000

# Define the command to run when the container starts, running the Node.js server
CMD ["node", "server.js"]