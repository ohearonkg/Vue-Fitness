FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN yarn add express
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./dist .
COPY ./server.js .

EXPOSE 8080
CMD [ "node", "server.js" ]