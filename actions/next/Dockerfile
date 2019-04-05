FROM smebberson/alpine-nodejs:8.1.0

LABEL "com.github.actions.name"="Next"
LABEL "com.github.actions.description"="Use Yarn in a GitHub action"
LABEL "com.github.actions.icon"="book"
LABEL "com.github.actions.color"="orange"

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN npm install -g yarn && \
    yarn add next

ADD entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT ["sh", "/usr/bin/entrypoint.sh"]
