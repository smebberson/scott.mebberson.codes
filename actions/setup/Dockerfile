FROM smebberson/alpine-nodejs:8.1.0

LABEL "com.github.actions.name"="Setup"
LABEL "com.github.actions.description"="Setup the repository ready for future GitHub Actions."
LABEL "com.github.actions.icon"="settings"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN npm install -g yarn

ADD root /

CMD ["sh", "/usr/bin/entrypoint.sh"]