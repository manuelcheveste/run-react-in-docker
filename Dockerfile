FROM node:13.6

WORKDIR /apps/my-react-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["node", "app.js"]
