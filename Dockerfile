FROM node:16-alpine

COPY . .

CMD [ "npm", "run", "dev" ]