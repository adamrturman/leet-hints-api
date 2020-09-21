#!/bin/bash

API="http://localhost:4741"
URL_PATH="/challenges"

curl "${API}${URL_PATH}/${ID}/comments/${COMMENTID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "comment": {
    "text": "'"${TEXT}"'"
    }
  }'

echo
