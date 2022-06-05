#!/bin/bash
set -e

rm -f /tangocho/tmp/pids/server.pid

exec "$@"
