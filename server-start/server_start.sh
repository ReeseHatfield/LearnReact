#!/bin/bash

echo Starting server...

# shellcheck disable=SC2164
cd ../app/backend/database
ts-node server.ts