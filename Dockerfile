FROM node:boron-alpine

WORKDIR /kaleidoscope/

ADD package.json .
# Install all the dependencies
RUN npm install

ADD . /kaleidoscope/

EXPOSE 3000
CMD [ "npm", "start" ]