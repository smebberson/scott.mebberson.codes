FROM smebberson/alpine-nodejs:8.1.0

LABEL "com.github.actions.name"="GitHub Pages publish"
LABEL "com.github.actions.description"="Publish the out directory to the gh-pages branch."
LABEL "com.github.actions.icon"="copy"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN mkdir -p /etc/ssl/certs && \
    apk add --update --no-cache openssl ca-certificates && \
    update-ca-certificates

ADD root /

CMD ["sh", "/usr/bin/entrypoint.sh"]