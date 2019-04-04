FROM smebberson/alpine-nodejs:8.1.0

LABEL "com.github.actions.name"="Publish"
LABEL "com.github.actions.description"="Publish the latest version of scott.mebberson.codes"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="green"

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN npm install -g yarn

ADD entrypoint.sh /usr/bin/entrypoint.sh
CMD ["sh", "/usr/bin/entrypoint.sh"]
