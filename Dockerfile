FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY .npmrc ./
RUN npm install
COPY ./src src/
EXPOSE 8085
RUN cd src && ls -la
ENTRYPOINT [ "npm", "start" ]
