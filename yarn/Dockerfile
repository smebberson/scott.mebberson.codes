FROM smebberson/alpine-nodejs:8.1.0

LABEL "com.github.actions.name"="Yarn"
LABEL "com.github.actions.description"="Use Yarn in a GitHub action"
LABEL "com.github.actions.icon"="box"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN npm install -g yarn

ADD entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT ["sh", "/usr/bin/entrypoint.sh"]
