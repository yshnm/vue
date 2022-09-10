FROM node:current-alpine3.16

WORKDIR /app

ADD . /app/

RUN apk update && \
    npm install -g npm @vue/cli@5.0.8
