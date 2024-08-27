FROM node:18

WORKDIR /app

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  && apt-get clean

COPY package.json .
RUN npm install

COPY . .

CMD [ "npm", "run", "prod" ]
