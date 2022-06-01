FROM ruby:2.7.6-alpine3.15

WORKDIR /myapp
COPY Gemfile* /myapp/
RUN apk add --no-cache -t .build-dependencies \
  alpine-sdk \
  build-base \
  mysql-client \
  && apk add --no-cache \
  bash \
  mysql-dev \
  nodejs \
  tzdata \
  yarn \
  && gem install bundler:2.0.2 \
  && bundle install \
  && apk add --no-cache libc6-compat \
  && ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2 \
  && apk del --purge .build-dependencies

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
