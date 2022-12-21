FROM node:18-alpine
WORKDIR /app
RUN npm install pm2 -g
COPY package.json .
COPY yarn.lock .
# this install so we have lerna installed before we werun bootstrap
RUN yarn install
COPY . .
RUN yarn bootstrap

CMD [ "sh", "dev.sh", "-s" ] 