FROM node:20-alpine
WORKDIR /server
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
EXPOSE 5000