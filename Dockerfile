FROM node:18-alpine
WORKDIR /app
RUN npm install pm2 -g
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn bootstrap
# RUN yarn run lerna run dockerDev
# RUN cd examples/create-react-app-typescript && yarn dockerDev
# RUN cd examples/nextjs-app-typescript && yarn dockerDev
# RUN pm2 ps
# CMD [ "yarn", "run", "lerna", "run", "dockerDev" ]
CMD [ "sh", "dev.sh" ] 