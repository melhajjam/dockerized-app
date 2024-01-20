FROM node:20-alpine as base


FROM base as development
WORKDIR /app

COPY package*.json ./

ARG NODE_ENV

RUN npm install -g npm@10.3.0
RUN npm i

COPY . .

EXPOSE 4000

# hard way to specifier run command for each mode
#CMD ["sh", "-c", "npm run $MODE"]

CMD ["npm", "run", "start-dev"]


FROM base as production

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@10.3.0
RUN npm i --only=production

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]
