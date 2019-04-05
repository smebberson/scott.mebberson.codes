FROM smebberson/alpine-nodejs:8.1.0

LABEL "com.github.actions.name"="Build"
LABEL "com.github.actions.description"="Build the latest version of scott.mebberson.codes"
LABEL "com.github.actions.icon"="play"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN npm install -g yarn && \
    yarn add next

ADD entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT ["sh", "/usr/bin/entrypoint.sh"]
