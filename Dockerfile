FROM node:16.19-alpine


WORKDIR /app/sai-back


COPY package*.json .


RUN npm install

ENV CHOKIDAR_USEPOLLING=true
COPY . .


CMD node ace serve --watch


