FROM smebberson/alpine-nodejs:8.1.0

LABEL "repository"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "homepage"="https://github.com/smebberson/scott.mebberson.codes"
LABEL "maintainer"="Scott Mebberson <scott@scottmebberson.com>"

RUN mkdir -p /etc/ssl/certs && \
    apk add --update --no-cache openssl ca-certificates && \
    update-ca-certificates

ADD root /

CMD ["sh", "/usr/bin/entrypoint.sh"]
