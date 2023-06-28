FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

# CMD [ "npm", "run", "dev" 
CMD ["node", "index.js"]