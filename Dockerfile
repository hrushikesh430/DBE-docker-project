FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE $3000
ENTRYPOINT ["node"]
CMD ["index.js"]
