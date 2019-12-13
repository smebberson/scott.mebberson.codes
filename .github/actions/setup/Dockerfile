FROM smebberson/alpine-nodejs:8.15.0

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN npm install -g yarn

ADD root /

CMD ["sh", "/usr/bin/entrypoint.sh"]
