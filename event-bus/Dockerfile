FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4005
CMD ["npm", "run", "start"]

# $ docker build -t selenasiri/m-event-bus:1.0 .