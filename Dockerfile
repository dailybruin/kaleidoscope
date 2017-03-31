FROM node:boron

# Clone the repo from github
RUN git clone https://github.com/daily-bruin/kaleidoscope

# Change workind directory to the cloned repo
WORKDIR /kaleidoscope

# Install all the dependencies
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]