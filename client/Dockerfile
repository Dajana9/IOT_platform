FROM node:16-alpine as build-step

WORKDIR /frontend

# ENV PATH /frontend/node_modules/.bin:$PATH
ENV NODE_ENV development

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . .
