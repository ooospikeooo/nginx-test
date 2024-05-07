
FROM node:20.11.1-alpine

ARG WORKDIR
ENV WORKDIR ${WORKDIR}
WORKDIR ${WORKDIR}
COPY . ./

RUN chmod 755 entrypoint.sh

RUN apk --no-cache add tzdata && \
	cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
	echo "Asia/Seoul" > /etc/timezone \
	apk del tzdata

RUN npm install

# RUN npm run build 